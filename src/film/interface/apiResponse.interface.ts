import { ApiResponseData } from './apiResponseDataFilms.interface';

export interface ApiResponse {
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request: any;
  data: ApiResponseData;
}
