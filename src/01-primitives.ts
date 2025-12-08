/**
 * Прості типи в TypeScript описують значення без внутрішньої структури.
 *
 * Структура заняття:
 * 1) Демонстрація: any, number, string, boolean, null, undefined.
 * 2) Інференція типів: як TS сам розуміє типи змінних.
 */
//!======================================================
// any vs конкретні примітиви: any вимикає перевірки; number/string/boolean/undefined/null дають передбачуваність і підказки.

// const x:number = 'Hello';
// let y: string = 'Vasya';

// let isAdmin: boolean = true;
// let isAdmin: boolean = false;

// let x: any = 25;

// x = 25;
// x = 'Hello';

// y = 'Hello';
// y = 'Anton';
// y = 25;




//!======================================================
// let x = 'String';
// x = true;

// інференція: TS виводить тип з присвоєння (const x = 10 => number), але явна анотація потрібна, коли інференція двозначна.
//!======================================================
// null/undefined: позначають відсутність значення; часто комбінують через union з основним типом.
// let x: number | null;
//!======================================================

//!======================================================
/* 🧩 Task 1 — типи змінних
 * Додай явні примітивні типи замість unknown/any.
 */
export let userName: string = "Olena";
export const isOnline: boolean = true;
export let clicks: number = 0;

/* 🧩 Task 2 — інференція
 * Дай TS самостійно вивести типи, а потім спробуй порушити типобезпеку.
 */
export const basePrice = 100;
export const totalPrice: string = basePrice + " UAH";

/* 🧩 Task 3 — union для відсутності значення
 * Обмеж те, що може бути null чи undefined, без any.
 */
// export let optionalScore: string | null = null;
// export let promoCode: string | undefined = undefined;




