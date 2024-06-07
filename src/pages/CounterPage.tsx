import { useEffect, useState } from 'react';
import { getAreas, getMeters } from '../connections/server-connections';
import CounterTable from '../components/CounterTable';
import { Area, Meter } from '../utils/types';

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
      <h1>Список счётчиков</h1>
      <CounterTable meters={meters} areas={areas} />
    </>
  );
}
