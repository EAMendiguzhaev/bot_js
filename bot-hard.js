"use strict";
const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const getRandomNumber = function (num) {
  num = Math.floor(Math.random() * 101);
  console.log(num); // необязательно выводить
  return num;
};

const numbeOfAttempts = 3;

const checkFunction = (hiddenNumber) => {
  return function one(attempts) {
    if (attempts > 0) {
      const question = prompt("Угадай число от 1 до 100");
      if (question === null) {
        return alert("Игра окончена");
      } else if (question > hiddenNumber) {
        attempts--;
        alert(
          `Загаданное число меньше, осталось попыток ${attempts}. Попробуйте снова!`
        );
        checkFunction(hiddenNumber);
      } else if (question < hiddenNumber) {
        attempts--;
        alert(
          `Загаданное число больше, осталось попыток ${attempts}. Попробуйте снова!`
        );
        checkFunction(hiddenNumber);
      } else if (!isNumber(question)) {
        alert("Введи число!");
        checkFunction(hiddenNumber);
      } else if (+question === hiddenNumber) {
        const questionAfterWinning = сonfirm(
          "Поздравляю, Вы угадали!!! Хотели бы сыграть еще?"
        );
        if (questionAfterWinning === true) {
          startBot(numbeOfAttempts);
        } else {
          alert("До скорого!");
        }
      }

      one(attempts);
    } else if (attempts <= 0) {
      const questionAfterLosing = confirm(
        "Попытки закончились, хотите сыграть еще?"
      );
      if (questionAfterLosing === true) {
        startBot(numbeOfAttempts);
      } else {
        alert("До скорого!");
      }
    }
  };
};

const startBot = checkFunction(getRandomNumber());
startBot(numbeOfAttempts);
console.dir(startBot);
