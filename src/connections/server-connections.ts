import qs from 'qs';
import { eisAPI } from './axios-instance';
import { ServerResponse, Meter, Area } from '../utils/types';

export const METERS_LIMIT = 20;

export function getMeters(offset: number = 0) {
  return eisAPI.get<ServerResponse<Meter>>('/meters', {
    params: { limit: 20, offset: offset },
  });
}

export function getAreas(idList: Array<string>) {
  const idInParams = { id__in: idList };
  const query = qs.stringify(idInParams, { arrayFormat: 'repeat' });
  return eisAPI.get<ServerResponse<Area>>(
    `/areas?limit=${METERS_LIMIT}&offset=0&${query}`
  );
}
