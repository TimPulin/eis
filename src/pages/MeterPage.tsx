import { useEffect, useState } from 'react';
import { useMessage } from '../contexts/MessageContext';
import metersStore from '../stores/meters-store';
import areasStore from '../stores/areas-store';
import areaIdListStore from '../stores/area-id-list-store';

import {
  getAreas,
  getMeters,
  deleteMeter,
  METERS_LIMIT,
} from '../connections/server-connections';

import PaginationList from '../components/pagination/PaginationList';
import MeterTable from '../components/meter-table/MeterTable';

import styled from 'styled-components';
import { H1 } from '../styles/titles';
import { ServerError } from '../utils/types';

const Main = styled.main`
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: auto 1fr auto;
  row-gap: 8px;
  padding-bottom: 20px;
  box-sizing: border-box;
`;

export default function MeterPage() {
  const { addMessage } = useMessage();
  const [count, setCount] = useState(0);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  async function getData(offset: number = 0) {
    try {
      metersStore.setLoading(true);
      const meters = await getMeters(offset);

      metersStore.setMeters(meters.data.results);

      const newAreaIdList = areaIdListStore.getNewAreaIdList(
        meters.data.results.map((meter) => meter.area.id)
      );

      if (newAreaIdList) {
        const areas = await getAreas(newAreaIdList);
        areasStore.setAreas(areas.data.results);
        areaIdListStore.setAreaIdList(newAreaIdList);
      }

      if (meters.data.count !== count) setCount(meters.data.count);
    } catch (error) {
      const axiosError = error as ServerError;
      addMessage(
        `Не удалось получить список счётчиков. ${axiosError.response.statusText}`
      );
    } finally {
      metersStore.setLoading(false);
    }
  }

  const deleteMeterLocal = async (id: string) => {
    try {
      await deleteMeter(id);
      addMessage(`Счётчик ${id} удален`);
    } catch (error) {
      const axiosError = error as ServerError;
      addMessage(
        `Не удалось удалить счётчик ${id}. ${axiosError.response.statusText}`
      );
    }
    await getData(currentPageIndex * METERS_LIMIT);
  };

  const onClickPagination = (pageIndex: number) => {
    setCurrentPageIndex(pageIndex);
    getData(pageIndex * METERS_LIMIT);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Main>
      <H1>Список счётчиков</H1>
      <MeterTable
        currentPageIndex={currentPageIndex}
        deleteMeter={deleteMeterLocal}
      />

      <PaginationList
        limit={METERS_LIMIT}
        count={count}
        currentPageIndex={currentPageIndex}
        onClick={onClickPagination}
      />
    </Main>
  );
}
