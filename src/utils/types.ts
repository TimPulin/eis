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

export type { ServerResponse, ServerError };
