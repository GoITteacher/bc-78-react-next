/**
 * Типізація об'єктів: interface та type, опціональні й readonly поля, вкладені структури.
 *
 * План уроку:
 * - Розбір різниці між interface та type (коли що використовувати).
 * - Приклади опціональних полів та readonly для захисту структури.
 * - Вкладені об'єкти: як задавати типи для address, metadata тощо.
 * - Коротке завдання: описати користувача з адресою і ролями.
 */

// interface User {
//   firstName:string;
//   lastName: string;
//   age: number;
//   isAdmin: boolean;
// }

// const user1: User = {
//   firstName: 'Vasya',
//   age:20,
//   isAdmin: true,
// }

// console.log(user1);


// interface Book {
//   title: string;
//   author: string;
//   price: number;
//   created: Date;
// }

// type Car = {
//   model: string;
//   price: number;
//   year:number;
// }
// type InsertPosition = "afterbegin" | 'afterend' | 'beforebegin' | 'beforeend';

// const x: InsertPosition = 'afterend';

//!======================================================
// type UserId = string | number;

// let x:UserId = 25;

// x = 'Hello25';
// x = 255;

//!======================================================
// interface vs type: interface для форм об'єктів і підтримує declaration merging; type універсальний (об'єкти, union, intersection), але не мерджиться.
//!======================================================
// optional та readonly: поле з ? може бути відсутнє; readonly захищає значення після створення (ідентифікатори, константні властивості).

// interface Book {
//   readonly id: string;
//   readonly year: number;
//   title: string;
//   readonly author: string;
//   image?: string;
// }

// const book1: Book = {
//   id: '1231231231',
//   title: 'Harry Potter',
//   author: 'Author',
//   year: 2025,
//   image: '123123123'
// }

// book1.title = 'Hello'
// book1.title = 25;

// book1.author = 'Vasya';




//!======================================================
// вкладені об'єкти: описуйте вкладені структури окремими типами (наприклад, Address, Metadata) і використовуйте їх усередині більших сутностей.
// interface UserAddress{
//     city: string;
//     country: string;
// }

// type UserType = 'user' | 'admin' | 'manager';

// interface MyUser{
//   firstname: string;
//   age: number;
//   address: UserAddress
//   userType: UserType
// }



//!======================================================
// завдання: створити тип користувача з address і roles, де id readonly, email опційний, а roles — масив літералів.
//!======================================================

//!======================================================
/* 🧩 Task 1 — interface
 * Опиши адресу та користувача з опціональним email і readonly id.
 * Зараз усе типізовано як unknown/any — заміни на точні типи.
 */
export interface Address {
  city: string;
  street: string;
  apartment?: number;
}

export interface User {
  readonly id: string | number;
  name: string;
  email?: string;
  address: Address;

}

export const vasyl: User = {
  id: 1,
  name: "Vasyl",
  address: {
    city: "Lviv",
    street: "Shevchenka 10",
  },
};

/* 🧩 Task 2 — type + об'єднання
 * Опиши контакт і співробітника, додай літеральні ролі та позиції.
 * Поки що position і contact мають нечіткі типи.
 */
export type Contact = {
  phone?: string;
  telegram?: string;
};

export type Employee = User & {
  position: 'admin' | 'manager' | 'mentor';
  isActive: boolean;
  contact?: Contact;
};

export const olena: Employee = {
  id: 2,
  name: "Olena",
  email: "olena@example.com",
  position: "mentor",
  isActive: true,
  address: {
    city: "Kyiv",
    street: "Khreshchatyk 1",
  },
  contact: {
    phone: "+380991234567",
  },
};

/* 🧩 Task 3 — опціональні поля
 * Типізуй функцію так, щоб доступ до contact.phone не вимагав кастів.
 */
export function printContact(user) {
  const contact = user.contact?.phone ?? "no phone";
  console.log(`${user.name}: ${contact}`);
}
