"use strict";
const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const getRandomNumber = function (num) {
  return (num = Math.floor(Math.random() * 101));
};

const numbeOfAttempts = function (attempts) {
  return (attempts = 10); // количество попыток
};

const checkFunction = (hiddenNumber, attempts) => {
  return function check() {
    if (attempts > 0) {
      const question = prompt("Угадай число от 1 до 100");
      if (question === null) {
        alert(`Игра окончена. Загаданное число было ${hiddenNumber}.`);
      } else if (question > hiddenNumber) {
        attempts--;
        alert(
          `Загаданное число меньше, осталось попыток ${attempts}. Попробуйте снова!`
        );
        check();
      } else if (question < hiddenNumber) {
        attempts--;
        alert(
          `Загаданное число больше, осталось попыток ${attempts}. Попробуйте снова!`
        );
        check();
      } else if (!isNumber(question)) {
        alert("Введи число!");
        check();
      } else if (+question === hiddenNumber) {
        const questionAfterWinning = confirm(
          "Поздравляю, Вы угадали!!! Хотели бы сыграть еще?"
        );
        if (questionAfterWinning === true) {
          hiddenNumber = Math.floor(Math.random() * 101);
          attempts = 10;
          startBot();
        } else {
          alert("До скорого!");
        }
      }
    } else if (attempts <= 0) {
      const questionAfterLosing = confirm(
        "Попытки закончились, хотите сыграть еще?"
      );
      if (questionAfterLosing === true) {
        hiddenNumber = Math.floor(Math.random() * 101);
        attempts = 10;
        startBot();
      } else {
        alert("До скорого!");
      }
    }
  };
};

const startBot = checkFunction(getRandomNumber(), numbeOfAttempts());
startBot();
console.dir(startBot);
