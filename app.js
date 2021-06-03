"use strict";

const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

// С помощью замыкания:

const quessTheNumber = function (num) {
  return function checkFunction() {
    const question = prompt("Угадай число от 1 до 100");

    if (question === null) {
      return alert("Игра окончена");
    }

    if (question > num) {
      alert("Загаданное число меньше");
      return checkFunction();
    }

    if (question < num) {
      alert("Загаданное число больше");
      return checkFunction();
    }

    if (!isNumber(question)) {
      alert("Введи число!");
      return checkFunction();
    }

    if (question == num) {
      return alert("Поздравляю, Вы угадали!!!");
    }
  };
};

const startGame = quessTheNumber(14);
startGame();

// С помощью рекурсии:

// const quessTheNumber = function () {
//   const question = prompt("Угадай число от 1 до 100");
//   const num = 14;

//   if (question === null) {
//     return alert("Игра окончена");
//   }

//   if (question > num) {
//     alert("Загаданное число меньше");
//     return quessTheNumber();
//   }

//   if (question < num) {
//     alert("Загаданное число больше");
//     return quessTheNumber();
//   }

//   if (!isNumber(question)) {
//     alert("Введи число!");
//     return quessTheNumber();
//   }

//   if (question === num) {
//     return alert("Поздравляю, Вы угадали!!!");
//   }

//   quessTheNumber();
// };

// quessTheNumber();
