"use strict";

const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const getRandomNumber = function () {
  const num = Math.floor(Math.random() * 101);
  console.log(num); // необязательно выводить
  return num;
};

const quessTheNumber = getRandomNumber();

const checkFunction = function (hiddenNumber) {
  const question = prompt("Угадай число от 1 до 100");

  if (question === null) {
    return alert("Игра окончена");
  } else if (question > hiddenNumber) {
    alert("Загаданное число меньше");
    checkFunction(hiddenNumber);
  } else if (question < hiddenNumber) {
    alert("Загаданное число больше");
    checkFunction(hiddenNumber);
  } else if (!isNumber(question)) {
    alert("Введи число!");
    checkFunction(hiddenNumber);
  } else if (+question === hiddenNumber) {
    return alert("Поздравляю, Вы угадали!!!");
  }
};

checkFunction(quessTheNumber);
