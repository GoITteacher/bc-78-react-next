export interface Product {
  _id: string;
  name: string;
  img: string;
  category: string;
  size: string;
  price: number;
  is10PercentOff: boolean;
  popularity: number;
}

export interface GetPropductsResponse {
  page: number;
  perPage: number;
  totalPages: number;
  results: Product[];
}

export interface GetProductsParams {
  keyword?: string;
  category?: string;
  byABC?: boolean;
  byPrice?: boolean;
  byPopularity?: boolean;
  page?: number;
  limit?: number;
}
