import { useEffect, useState } from 'react';
import { getAreas, getMeters } from '../connections/server-connections';
import PaginationList from '../components/pagination/PaginationList';
import MeterTable from '../components/meter-table/MeterTable';
import { H1 } from '../styles/titles';
import { Area, Meter } from '../utils/types';
import { METERS_LIMIT } from '../connections/server-connections';

export default function MeterPage() {
  const [meters, setMeters] = useState<Array<Meter>>([]);
  const [areas, setAreas] = useState<Array<Area>>([]);
  const [count, setCount] = useState(0);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  async function getMetersLocal(offset: number = 0) {
    const meters = await getMeters(offset);
    const addressList = new Set(
      meters.data.results.map((meter) => meter.area.id)
    );

    if (addressList) {
      getAreasLocal(Array.from(addressList));
    }

    setMeters(meters.data.results);
    setCount(meters.data.count);
  }

  async function getAreasLocal(addressList: Array<string>) {
    const areas = await getAreas(addressList);
    setAreas(areas.data.results);
  }

  const onClickPagination = (pageIndex: number) => {
    setCurrentPageIndex(pageIndex);
    getMetersLocal(pageIndex * METERS_LIMIT);
  };

  useEffect(() => {
    getMetersLocal();
  }, []);

  return (
    <>
      <H1>Список счётчиков</H1>
      <MeterTable
        meters={meters}
        areas={areas}
        currentPageIndex={currentPageIndex}
      />

      <PaginationList
        limit={METERS_LIMIT}
        count={count}
        currentPageIndex={currentPageIndex}
        onClick={onClickPagination}
      />
    </>
  );
}
