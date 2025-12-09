/**
 * Узагальнені типи (generics)
 *
 * План:
 * - Навіщо generics: повторне використання з різними типами.
 * - Параметри типів <T>, кілька параметрів <T, U>.
 * - Обмеження (extends) для властивостей/методів.
 * - Інференція типів для generic-функцій і колбеків.
 * - Завдання: переписати функції з any/unknown на generics з обмеженнями.
 */
//!======================================================
// generics дозволяють писати одну функцію для різних типів без any, зберігаючи підказки.

function getLastElement<T>(arr: T[]){
  const lastIndex = arr.length - 1;
  const myElem:T =  arr[lastIndex]
  return myElem
}

getLastElement<number>([1,2,3,5,6,6])
getLastElement<string>(['hello', 'world'])

//!======================================================
// обмеження: <T extends { id: number }> гарантує наявність id; зручно для фільтрів і пошуку.
//!======================================================
// інференція: TS часто виводить T із аргументів, тож явний <T> потрібен лише інколи.
//!======================================================
/* 🧩 Task 1 — перший елемент
 * Заміни any/unknown на generics і додай обмеження, якщо треба.
 */
// export function getFirstElement<N>(arr: N[]): N {
//   return arr[0];
// }

// getFirstElement<number>([1,2,45])
//!======================================================
/* 🧩 Task 2 — перемішування
 * Типізуй shuffle так, щоб зберігався тип елементів без any.
 */
// export function shuffle<T>(array: T[]): T[] {
//   return array.sort(() => Math.random() - 0.5);
// }

// shuffle<string>(['stqw','aawd','sefse'])

//!======================================================

/* 🧩 Task 3 — сховище
 * Використай generics для збереження/завантаження без кастів.
 */

//!======================================================
// export function saveToStorage<T>(key: string, value: T) {
//   localStorage.setItem(key, JSON.stringify(value));
// }

// saveToStorage<number>('userName', 12312)
// saveToStorage<string>('userName', 'awdawd')

//!======================================================
// export function loadFromStorage<T>(key: string): T | null {
//   const item = localStorage.getItem(key);
//   if (item !== null) {
//     return JSON.parse(item);
//   }
//   return null;
// }

// let res: number | null;

// res = loadFromStorage<number>('username');

//!======================================================

/* 🧩 Task 4 — max за селектором
 * Додай generics та обмеження для selector, щоб не втратити тип елемента.
 */

// export function max<T>(array: T[], selector: (item: T) => number): any {
//   return array.reduce((prev, curr) =>
//     selector(curr) > selector(prev) ? curr : prev
//   );
// }
