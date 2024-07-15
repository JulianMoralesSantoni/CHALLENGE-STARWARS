import { UrlMetaData } from './interfaceUrl.interface';

export interface ApiResponseMetaData {
  count: number;
  next: string | null;
  previous: string | null;
  results: UrlMetaData[];
}
