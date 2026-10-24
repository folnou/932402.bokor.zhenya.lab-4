"use strict";

/**
 * Лабораторная работа №4. Основы JavaScript
 * Вариант 6. Тема: «Любитель кино и сериалов» (длительность фильмов)
 */

// ---------- Константы ----------
const FULL_LENGTH_MIN = 120;   // фильмы длиннее этого значения — полнометражные (по заданию > 120)
const SHORT_FILM_MAX = 40;     // короткометражки — не длиннее 40 минут
const THEATRE_LIMIT = 180;     // порог для сообщения про театральный спектакль

// Данные: длительность фильмов в минутах (7 значений)
const durations = [25, 142, 95, 38, 181, 130, 40];

// ---------- Функции ----------

/** Возвращает максимальный элемент массива. */
function findMax(arr) {
    if (arr.length === 0) {
        return null;
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

/** Возвращает новый массив только с фильмами длиннее minDuration минут. */
function filterLongerThan(arr, minDuration) {
    const result = [];
    for (const value of arr) {
        if (value > minDuration) {
            result.push(value);
        }
    }
    return result;
}

/** Возвращает сумму элементов массива. */
function sumArray(arr) {
    let sum = 0;
    for (const value of arr) {
        sum += value;
    }
    return sum;
}

/**
 * Считает короткометражки (<= maxDuration) циклом.
 * Возвращает объект: количество и суммарная длительность.
 */
function countShortFilms(arr, maxDuration) {
    let count = 0;
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= maxDuration) {
            count++;
            total += arr[i];
        }
    }
    return { count: count, total: total };
}

/** Спрашивает имя у пользователя и возвращает его (с проверкой на пустой ввод/отмену). */
function askName() {
    const input = prompt("Как вас зовут?");
    if (input === null || input.trim() === "") {
        return "Гость";
    }
    return input.trim();
}

// ---------- Основная логика ----------

function main() {
    // Ввод / вывод: имя и приветствие
    const name = askName();
    alert("Привет, " + name + "! Добро пожаловать на страницу любителя кино и сериалов.");
    console.log("Пользователь: " + name);

    // Исходные данные
    console.log("Длительность фильмов (мин):", durations);

    // Максимум
    const maxDuration = findMax(durations);
    console.log("Максимальная длительность: " + maxDuration + " мин");

    // Фильтрация: фильмы > 120 минут
    const fullLength = filterLongerThan(durations, FULL_LENGTH_MIN);
    console.log("Фильмы длиннее " + FULL_LENGTH_MIN + " мин:", fullLength);

    // Суммы
    const totalAll = sumArray(durations);
    const totalFull = sumArray(fullLength);

    // Короткометражки (цикл)
    const shorts = countShortFilms(durations, SHORT_FILM_MAX);
    console.log("Короткометражек (≤ " + SHORT_FILM_MAX + " мин): " + shorts.count);
    console.log("Суммарная длительность короткометражек: " + shorts.total + " мин");

    // Условие: почти театральный спектакль
    if (maxDuration !== null && maxDuration >= THEATRE_LIMIT) {
        console.log("Это почти как полноценный театральный спектакль!");
    }

    // Итоговый alert
    alert(
        "Общая длительность просмотра – " + totalAll +
        " минут, из них " + totalFull + " минут – полнометражные фильмы"
    );
}

main();
