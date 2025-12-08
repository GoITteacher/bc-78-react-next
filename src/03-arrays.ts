/**
 * Типізація масивів: number[] чи Array<number>, підказки методів, масиви об'єктів і кортежі.
 *
 * Структура пояснення:
 * 1) Два синтаксиси типів масивів і коли який читабельніший.
 * 2) Як TS знає тип елементів у map/filter/find.
 * 3) Масиви об'єктів: окремий інтерфейс + список.
 * 4) Кортежі: фіксована кількість елементів різних типів.
 * 5) Міні-практика: типізувати список курсів та кортеж налаштувань.
 *
 */

// const x:number[] = [];
// const y:string[] = [];
// const u:(string | number)[] = [];

// x.push(1)
// x.push(2)
// x.push('Hello')

// y.push('test')
// y.push('world')
// y.push(25)

// u.push(123)
// u.push(345)
// u.push('Hello')

//!======================================================

// interface Student {
//   firstname: string;
//   age: number;
//   group: string;
// }

// const students: Student[] = [];

// students.push({'firstname': 'Vaysa', 'group':'121-24-1', 'age':25})


// students.filter(el=>{
//   return el.age > 25
// })


//!======================================================
// синтаксис: number[] і Array<number> рівноцінні; обирайте читабельний для команди.

const x: Array<number> = [1,2,3]
const y: number[] = [1,2,3]

const rgb: [number, number, number] = [1,2,3];

type RGBColor = [number, number ,number]

const red: RGBColor = [255, 0 , 0]



//!======================================================
// методи масивів: map/filter/find знають тип елементів і підказують параметри колбеків.
//!======================================================
// масиви об'єктів: краще описати окремий тип елемента й використовувати його для списку.
//!======================================================
// кортежі: фіксована кількість елементів різних типів, наприклад [string, number].
//!======================================================

//!======================================================
/* 🧩 Task 1 — масив чисел
 * Заміни unknown на коректний тип масиву та виправ push/map.
 */
// export const points: number[] = [10, 20, 30];
// points.push(40);
// const doubled = points.map(p => p * 2);

/* 🧩 Task 2 — масив об'єктів
 * Типізуй список курсів, щоб title і lessons були підказуваними.
 */

interface Course{
  title:string;
  lessons: number;
}

export const courses: Course[] = [
  { title: "TS Basics", lessons: 12 },
  { title: "React", lessons: 18 },
];


// const titles = courses.map(el=>el.title.toUpperCase());

/* 🧩 Task 3 — кортеж налаштувань
 * Опиши фіксований набір значень: назва, лічильник, активність.
 */

type Setting = [string, number, boolean];

export const settings: Setting = ["autosave", 3, true];
