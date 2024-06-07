import { useEffect, useState } from 'react';
import { getAreas, getMeters } from '../connections/server-connections';
import { Area, Meter } from '../utils/types';
import CounterTable from '../components/CounterTable';
import { H1 } from '../styles/titles';

export default function CounterPage() {
  const [meters, setMeters] = useState<Array<Meter>>([]);
  const [areas, setAreas] = useState<Array<Area>>([]);
  async function getMetersLocal(offset: number = 0) {
    const meters = await getMeters(offset);
    console.log(meters);

    setMeters(meters.data.results);
  }

  async function getAreasLocal(offset: number = 0) {
    const areas = await getAreas(offset);
    setAreas(areas.data.results);
  }

  useEffect(() => {
    getMetersLocal();
    getAreasLocal();
  }, []);
  return (
    <>
      <H1>Список счётчиков</H1>
      <CounterTable meters={meters} areas={areas} />
    </>
  );
}
