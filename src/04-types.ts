/**
 * Власні типи: об'єднання (union), літеральні типи, перевірки типів (type guards).
 *
 * Що показати:
 * - Приклади union: number | string для ідентифікаторів.
 * - Літеральні типи: фіксовані статуси чи ролі.
 * - Type guards: перевірка typeof/символи in для звуження типу.
 *
 */


//!======================================================
// union: дозволяє кілька варіантів типу (number | string) без any.

// type DeliveryStatus = 'in progress' | 'delivered' | 'not delivered'
// const status: DeliveryStatus = 'delivered';

//!======================================================

// type User = {
//   name: string;
//   age: number
// }

// type ContactInfo = {
//   email: string;
//   phoneNumber: string;
// }

// type UserInfo = User & ContactInfo

// const user:UserInfo = {
//   name: 'vasya',
//   age:25,
//   phoneNumber: '+3801231241',
//   email: 'awdawd@gmail.com'
// }
 




//!======================================================
// літеральні типи: обмежують значення до конкретних рядків/чисел, зручно для статусів/ролей.
//!======================================================
// type guards: перевірка typeof/Array.isArray/"prop" in звужує union до конкретного варіанта.

// interface Admin{
//   name: string;
//   balance: number;
//   phoneNumber: string;
//   typeAccount: 'admin'
// }

// interface Manager {
//   name: string;
//   salary: number;
//   email: string;
//   typeAccount: 'manager'
// }

// type MyUser = Admin | Manager;

// const user1:MyUser = {
//   name: 'Vasya',
//   balance: 0,
//   phoneNumber: '+30812312312',
//   typeAccount: 'admin'
// }

// const user2:MyUser = {
//   name: 'Roman',
//   salary: 30000,
//   email: 'test@gmail.com',
//   typeAccount: 'manager'
// }

// function showUserInfo(user: MyUser){
//   if(user.typeAccount === 'admin'){
//     user.balance
//   }else{
//     user.salary
//   }
// }

//!======================================================

type UserId = number | string;
const x: UserId = 25;

function showUserId(id: UserId){
  if(typeof id === 'number'){

  }else{
    console.log(id.toUpperCase());
  }
  
  
}


//!======================================================
/* 🧩 Task 1 — ідентифікатор
 * Заміни any на union number|string і відформатуй для обох випадків.
 */
export type Identifier = any;
export const formatId = (id: Identifier) => {
  return typeof id === "number" ? `#${id}` : id.toUpperCase();
};

/* 🧩 Task 2 — статуси замовлення
 * Опиши літеральні статуси, щоб заборонити довільні рядки.
 */
export type OrderStatus = string;
export const nextStatus = (status: OrderStatus): OrderStatus => {
  if (status === "pending") return "shipped";
  return "done";
};

/* 🧩 Task 3 — type guard
 * Додай звуження типу для різних форм payload.
 */
export type Payload = { type: "text"; value: string } | { type: "count"; value: number };
export function handlePayload(payload: any) {
  if (payload.type === "text") {
    return payload.value.trim();
  }
  return payload.value + 1;
}
