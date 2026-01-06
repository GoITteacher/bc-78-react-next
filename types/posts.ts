export interface Post {
  id: number;
  title: string;
  body: string;
  tags: [string];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}

export interface GetPostsResponse {
  total: number;
  skip: number;
  limit: number;
  posts: Post[];
}
