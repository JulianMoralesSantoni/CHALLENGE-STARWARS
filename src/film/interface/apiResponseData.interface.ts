import { Films } from "./films.interface";

export interface ApiResponseData {
  count: number;
  next: string | null;
  previous: string | null;
  results: Films[];
}
