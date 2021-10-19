// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// до вызова функции
let menu = {
width: 204,
height: 30.15,
title: "My menu"
};

function multiplyNumeric(obj) {
  for(key in obj){
    if (typeof(obj[key]) === "number") {
      obj[key] *= 2
    }
  }
  console.log(menu)
};

multiplyNumeric(menu)

// после вызова функции
menu = {
width: 400,
height: 600,
title: "My menu"
};

