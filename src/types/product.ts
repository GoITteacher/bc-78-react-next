export interface Product {
    _id: string;
    name: string;
    img: string;
    category:string;
    price: number;
    size: string;
    is10PercentOff: boolean;
    popularity: number;
}


export interface GetProductsRes {
    page: number;
    perPage: number;
    totalPages: number;
    results: Product[]
}


export interface GetProductParams {
    keyword?: string;
    category?: string;
    page?: number;
    limit?: number;
}