// /**
//  * Типізація HTTP-запитів з Axios.
//  *
//  * План:
//  * - Generics у axios.get/post для типізації даних.
//  * - Опис контрактів відповіді (DTO) і вкладених полів.
//  * - Типізація запитів: params/body, коди відповіді.
//  * - Обробка помилок AxiosError (unknown -> звуження).
//  * - Завдання: прибрати any/unknown, додати контракти для постів.
//  */


import axios from "axios";

//!======================================================
// axios.get<T> повертає Promise<AxiosResponse<T>>; data матиме тип T.


//!======================================================
// DTO: описуємо структуру відповіді/запиту окремими типами, щоб не дублювати.

// interface Address {
//   street: string;
//   suite: string;
//   city: string;
// }

// interface User {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   address: Address;
// }

// async function fetchUsers(){
//   const BASE_URL = 'https://jsonplaceholder.typicode.com';
//   const END_POINT = '/users';
//   const url = BASE_URL + END_POINT;

//   const res = await axios.get<User[]>(url);
//   return res.data;
// }


// document.addEventListener('DOMContentLoaded', async ()=>{
//   const users = await fetchUsers();
//   const markup = usersTemplate(users);
//   document.body.innerHTML = markup;
// })

// function userTemplate(user:User){
//   return `<div>${user.name} - ${user.email}</div>`
// }

// function usersTemplate(users:User[]){
//   return users.map(userTemplate).join('\n')
// }


//!======================================================
// Помилки: catch отримує unknown; звужуємо через axios.isAxiosError.

// interface Address {
//   street: string;
//   suite: string;
//   city: string;
// }

// interface User {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   address: Address;
// }

// async function fetchUsers(){
//   const BASE_URL = 'https://jsonplaceholder.typicode.com';
//   const END_POINT = '/users';
//   const url = BASE_URL + END_POINT;

//   const res = await axios.get<User[]>(url);
//   return res.data;
// }

// function userTemplate(user:User){
//   return `<div>${user.name} - ${user.email}</div>`
// }

// function usersTemplate(users:User[]){
//   return users.map(userTemplate).join('\n')
// }

// async function handleLoadDom(){

//   try{
//     const users = await fetchUsers();
//     const markup = usersTemplate(users);
//   }catch(err){
//     // err: string | Error | AxiosError | [string, string]; 


//     if(axios.isAxiosError(err)){
//       // err: AxiosError;

//     }else if(typeof err === 'string'){
//       // err: string;
//       console.log(err.toUpperCase());
//     }
//   }
// }
//!======================================================
/* 🧩 Task 1 — модель поста
 * Опиши Post з полями id/title/body/tags/reactions/views/userId.
 */
export type Post = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: number;
  views: number;
  userId: string;
};

/* 🧩 Task 2 — отримати всі пости
 * Типізуй відповідь від dummyjson.com/posts (posts, total, skip, limit).
 */

export async function getAllPosts() {
  const response = await axios.get<Post[]>("https://dummyjson.com/posts");
  return response.data;
}


/* 🧩 Task 3 — отримати пост за id
 * Додай тип для поста і параметра postId без any.
 */

export async function getPostById(postId:string): Promise<Post> {
  const response = await axios.get<Post>(`https://dummyjson.com/posts/${postId}`);
  return response.data;
}

/* 🧩 Task 4 — створити пост
 * Типізуй тіло запиту (title/body/tags) та відповідь.
 */

export type NewPost = {
  title: string;
  body: string;
  tags: string[];
  userId: string;
};

export async function createPost(newPost: NewPost): Promise<Post> {
  const response = await axios.post<Post>("https://dummyjson.com/posts/add", newPost);
  return response.data;
}

/* 🧩 Task 5 — обгортка відповіді
 * Узагальни HttpResponse<T>, прибери any і додай код статусу.
 */
// export type HttpResponse<T> = {
//   data: any;
//   code: number;
// };

// export const samplePost: HttpResponse<Post> = {
//   data: {
//     id: 0,
//     title: "Sample",
//     body: "Replace types",
//     tags: [],
//     reactions: { likes: 0, dislikes: 0 },
//     views: 0,
//     userId: 0,
//   },
//   code: 200,
// };

//!======================================================

// interface Article {
//   title: string;
//   author: string;
//   description: string;
//   url: string;
//   urlToImage: string;
//   publishedAt: string;
//   content: string;
// }

// interface FetchNewsParams{
//   q: string;
//   searchIn?: 'title' | 'description' | 'content',
//   sources?: string;
//   language?: string;
// }

// interface FetchNewsResponse {
//   articles: Article[];
//   status: string;
//   totalResults: number;
// }

// async function fetchNews(userParams: FetchNewsParams){
//   const BASE_URL = 'https://newsapi.org/v2';
//   const END_POINT = '/everything';
//   const url = BASE_URL +END_POINT;

//   const params = {
//     apiKey:'c8747511a2c34730a83caaff4f3693e7',
//     ...userParams
//   };

//   const res = await axios.get<FetchNewsResponse>(url, {params});

//   return res.data
// }

// fetchNews({q: 'Tesla'})

//!======================================================