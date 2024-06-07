import { eisAPI } from './axios-instance';
import { ServerResponse, Meter, Area } from '../utils/types';

export function getMeters(offset: number = 0) {
  return eisAPI.get<ServerResponse<Meter>>('/meters', {
    params: { limit: 20, offset: offset },
  });
}

export function getAreas(offset: number) {
  return eisAPI.get<ServerResponse<Area>>(`/areas`, {
    params: { limit: 20, offset: offset },
  });
}
