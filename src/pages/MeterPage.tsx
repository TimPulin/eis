import { useEffect, useState } from 'react';
import metersStore from '../stores/meters-store';
import areasStore from '../stores/areas-store';
import areaIdListStore from '../stores/area-id-list-store';

import {
  getAreas,
  getMeters,
  METERS_LIMIT,
} from '../connections/server-connections';
import PaginationList from '../components/pagination/PaginationList';
import MeterTable from '../components/meter-table/MeterTable';
import { H1 } from '../styles/titles';

export default function MeterPage() {
  const [count, setCount] = useState(0);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  async function getData(offset: number = 0) {
    const meters = await getMeters(offset);

    // 526237d1e0e34c524382c0aa

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
  }

  const onClickPagination = (pageIndex: number) => {
    setCurrentPageIndex(pageIndex);
    getData(pageIndex * METERS_LIMIT);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <H1>Список счётчиков</H1>
      <MeterTable currentPageIndex={currentPageIndex} />

      <PaginationList
        limit={METERS_LIMIT}
        count={count}
        currentPageIndex={currentPageIndex}
        onClick={onClickPagination}
      />
    </>
  );
}
