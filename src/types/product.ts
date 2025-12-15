export interface Product {
    _id: string;
    name: string;
    img: string;
    category: string;
    size: string;
    price: number;
    popularity: number;
    is10PercentOff: boolean;
}

export interface SearchProductResponse {
    page: number;
    perPage: number;
    totalPages: number;
    results: Product[];
}

export interface SearchProductParams {
    keyword: string;
    page: number;
    limit: number;
}
