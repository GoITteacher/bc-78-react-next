/**
 * Типізація промісів і async/await.
 *
 * План:
 * - Основи Promise<T> і тип результату.
 * - Обробка помилок: reject, try/catch, Promise.reject.
 * - async/await: інференція типів, повернення промісів.
 * - Паралельні запити: Promise.all / Promise.allSettled.
 * - Завдання: переписати функції з any/unknown на точні типи.
 */

//!======================================================
// Promise<T>: типізуємо значення, яке буде доступне в then/await, уникаємо any.

function sleep(delay: number): Promise<number> {
  const promise:Promise<number> = new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(delay)
    }, delay)
  })
  return promise
}


//!======================================================
// Помилки: відловлюємо через catch/try-catch, бажано типізувати помилки (unknown) і звужувати.
//!======================================================
// async/await: async-функція завжди повертає Promise; тип результату виводиться з return.



// async function loadData(){
//   const res =  await sleep(200);
// }
async function foo(x:number) {
  return x * 2;
}


const res = foo(25);// Promise(50);
const res2 = await foo(25);// 50;

//!======================================================
/* 🧩 Task 1 — базовий проміс
 * Типізуй повідомлення, яке резолвиться через setTimeout.
 */
export const getMessage = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hello!"), 500);
  });
};

/* 🧩 Task 2 — отримання користувача
 * Опиши тип користувача й поверни Promise з цим типом замість unknown.
 */

// interface User {
//   readonly id: number;
//   name: string;
// }

// export const getUser = (): Promise<User> => {
//   return new Promise((resolve) => {
//     resolve({ id: 1, name: "Alice" });
//   });
// };

// const user: User = await getUser();



/* 🧩 Task 3 — список користувачів
 * Зроби масив типізованим і додай обмеження на поля.
 */

interface User {
  readonly id: number;
  name: string;
}

export const getUsers = async (): Promise<User[]> => {
  return [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];
};

/* 🧩 Task 4 — обробка помилки
 * Типізуй помилку як unknown, звузь усередині catch.
 */

type MyError = {
  message: string;
  errorCode: number;
}

// export const safeParse = async (json: string): Promise<number> => {
//   try {
//     return JSON.parse(json);
//   } catch (error) {
//     const err: MyError = error as MyError;

//     console.log(err.message);
//     console.log(err.errorCode);

//     throw error;
//   }
// };

/* 🧩 Task 5 — паралельні запити
 * Типізуй Promise.all так, щоб результати мали підказки без кастів.
 */

// interface User {
//   readonly id: number;
//   name: string;
// }

// interface Post {
//   readonly id: number;
//   name: string;
// }

// interface LoadDataResponse{
//   user: User,
//   posts: Post[]
// }

// export async function loadData(
//   userPromise: Promise<User>,
//   postsPromise: Promise<Post[]>
// ): Promise<LoadDataResponse> {

//   const [user, posts] = await Promise.all([userPromise, postsPromise]);
//   return { user, posts };
// }


//!======================================================


// const x = JSON.parse('255');// x = number;
// const y: string = x as string;


//!======================================================