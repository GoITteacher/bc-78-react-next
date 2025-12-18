export interface Product {
    _id: string;
    name: string;
    img: string;
}

export interface GetProductResponse {
    page:number;
    perPage:number;
    totalPages:number;
    results: Product[]
}

export interface GetProductParams{
    keyword?: string;
    page?: number;
    limit?: number;
}