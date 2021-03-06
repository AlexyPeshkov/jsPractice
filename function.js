// Создать функцию калькулятор. Передается 3 параметра: a, b и операция над ними.
// Возможные операции:
// +: сложить a + b
// -: вычесть a - b
// *: умножить a * b
// /: разделить a / b
// %: остаток от деления a % b

function calculation(a, b, operation) {
  	if (operation === "+") {
  	return a + b
  }
  if (operation === "-") {
  	return a - b
  }
  if (operation === "*") {
  	return a * b
  }
  if (operation === "/") {
  	return a / b
  }
  if (operation === "%") {
  	return a % b
  }
}

console.log(calculation(-4, 4, "-"))
console.log(calculation(7, 4, "+"))
console.log(calculation(6, 4, "/"))
console.log(calculation(2, 4, "*"))
console.log(calculation(14, 5, "%"))


// Создайте функцию, которая принимает в качестве параметра целое число и возвращает значение true (истина), если число простое; иначе функция возвращает значение false (ложь).

function returnBoolean(number) {
	if (parseInt(number) === number) {
   return true
  } else {
  return false
  }
}

console.log(returnBoolean(4))

// Создайте функцию, которая принимает в качестве параметра целое число и возвращает количество цифр в этом числе.

function numberOfCharacters(number) {
	const array = number.toString().split('');
  const count = [];
  array.forEach(i => {
  	if (parseInt(i)){
    	count.push(i); 
    }
  })
  return count.length;
}

console.log(numberOfCharacters("kjsnfkjns-777.8843"))

// Создайте функцию, которая принимает в качестве параметра целое число и возвращает сумму его цифр.

function sumOfDigits(number) {
	let sum = 0
	var digits = String(number).split('')
  digits.forEach(num =>
  	sum += Number(num)
  )
  console.log(sum)
}

sumOfDigits(33)

// Создайте функцию rgb(), которая будет принимать три числовых аргумента и возвращать строку вида «rgb(23,100,134)».
// Если аргументы не заданы, считать их равными нулю.

function rgb(a, b, c) {
	var n1
  var n2
  var n3
  if(Number(a) === a && Number(b) === b && Number(c) === c){
  	n1 = a, n2 = b, n3 = c;
  }else{
  n1 = 0, n2 = 0, n3 = 0;
  }
  return `rgb(${n1}, ${n2}, ${n3})`
}

console.log(rgb(9, 5, 54))


// Создайте функцию, которая принимает в качестве параметров два целых числа (a и b) и выводит на экран все чётные числа из диапазона a...b

function evenNumberOutput(a, b) {
  var array = [];
  if (a < b) {
  	for(var i = a; i <= b; i++){
  	if (i % 2 === 0) {
    	array.push(i);
    }
  }
  } else {
  for(var i = b; i <= a; i++){
   if (i % 2 === 0){
   	array.push(i);
   }
  }
  }
  
  return array;
}

console.log(evenNumberOutput(10, 5));
console.log(evenNumberOutput(5, 10));


// Создайте функцию, которая принимает в качестве параметров координаты центра и радиус окружности, а также координаты некоторой точки. 
// Функция должна проверить, находится ли данная точка внутри окружности.

