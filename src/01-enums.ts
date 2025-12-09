/**
 * Перелічення (enum) та літеральні об'єднання.
 *
 * План:
 * - Коли обрати union замість enum, а коли enum корисний.
 * - Строкові vs числові enum-и, автонумерація.
 * - Підказки й захист від опечаток завдяки літералам.
 * - Завдання: оголосити статуси, коди відповіді та ролі користувача.
 */

// type Status = 'pending' | 'fulfilled' | 'rejected';

// enum StatusCode {
//   Ok = 200,
//   Created = 201,
//   NotFound = 404,
//   ServerError = 500
// }

// enum UserType {
//   Admin = 'Admin',
//   Student = 'Student',
//   Teacher = 'Teacher'
// }

// interface User {
//   firstname: string;
//   lastname: string;
//   userType: UserType;
// }

// const teacher: User = {
//   firstname: 'Vasya',
//   lastname: 'Test',
//   userType: UserType.Teacher
// }



// if(teacher.userType === UserType.Teacher){

// }


//!======================================================
// union vs enum: union простіший і не генерує додатковий код; enum додає рантайм-об'єкт і зручний, коли потрібні посилання в JS-коді.
//!======================================================
// string vs number enums: рядкові уникють зворотного мапінгу; числові можуть автонумерувати, але вимагають обережності.


// enum UserType {
//   Admin = 'Admin',
//   Student = 'Student',
//   Teacher = 'Teacher'
// }

// interface User {
//   firstname: string;
//   lastname: string;
//   userType: UserType;
// }



//!======================================================
// підказки: літеральні типи дають автокомпліт і перевірку значень; enum робить те саме, але через властивості об'єкта.

// type UserType = 'Admin' | 'Student' | 'Teacher';
// const x: UserType = ''

// enum UserType {
//   Admin = 'Admin',
//   Student = 'Student',
//   Teacher = 'Teacher'
// }
// const x: UserType = UserType.Admin;



//!======================================================
// enum UserType {
//   Admin = 'Admin',
//   Student = 'Student',
//   Teacher = 'Teacher'
// }

// Object.values(UserType) // ['Admin', 'Student', 'Teacher'];

//!======================================================
/* 🧩 Task 1 — статуси запиту
 * Заміни any на літеральний union або enum зі значеннями pending/fulfilled/rejected.
 */


// type Status = 'pending' | 'fulfilled' | 'rejected';

// enum Status{
//   Pendind = 'pending',
//   Fulfilled = 'fulfilled',
//   Rejected = 'rejected'
// }

// export const requestStatus: Status = "pending";

/* 🧩 Task 2 — коди відповіді
 * Опиши або union чисел, або enum з кодами 200/201/400/500.
 * Зараз тип надто широкий.
 */

// enum RequestCode {
//   Ok = 200,
//   Created = 201,
//   ClientError = 400,
//   NotFound = 404,
//   ServerError = 500
// }


// export const requestCode: RequestCode = RequestCode.Ok;

/* 🧩 Task 3 — ролі користувача
 * Створи ролі admin/user/guest через union чи enum.
 * Типізуй поле role у користувача.
 */

// export enum Role {
//   Admin = 'admin',
//   User = 'user',
//   Guest = 'guest'
// };

// export interface User {
//   username: string;
//   role: Role;
// }

// export const currentUser: User = {
//   username: "jacob",
//   role: Role.Admin,
// };
