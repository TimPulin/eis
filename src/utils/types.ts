type Meter = {
  id: string;
  area: { id: string };
  brand_name: string | null;
  communication: string;
  description: string;
  initial_values: Array<number>;
  installation_date: string;
  is_automatic: boolean | null;
  model_name: string;
  serial_number: string;
  _type: Array<string>;
};

type Area = {
  id: string;
  house: {
    id: string;
    address: string;
    fias_addrobjs: Array<string>;
  };
  number: number;
  str_number: string;
  str_number_full: string;
};

type ServerResponse<T> = {
  count: number;
  next: string;
  previous: string;
  results: Array<T>;
};

type ServerError = {
  response: {
    data: string;
    status: number;
    statusText: string;
  };
  code: string;
  message: string;
  name: string;
};

export type { Meter, Area, ServerResponse, ServerError };
