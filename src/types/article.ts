export interface Article {
    author:string;
    created_at: string;
    num_comments: number;
    objectID:string;
    points: number;
    title: string;
    url: string;
}


export interface FetchArticlesResponse {
    hits: Article[];
    hitsPerPage: number;
    nbHits:number;
    nbPages: number;
    page: number;
}