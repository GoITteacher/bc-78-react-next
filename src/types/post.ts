export interface Post{
    id: number;
    title: string;
    body: string;
    views: number;
}

export interface GetPostsResponse{
    posts: Post[];
    total: number;
    skip: number;
    limit: number;
}

export interface GetPostsParams {
     limit: number; 
     skip: number 
}