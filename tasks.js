/* Task 1
Составьте программу, которая создаёт список из 10 элементов и заполняет его случайными положительными однозначными числами.
Программа должна подсчитать и вывести на экран произведение всех значений элементов списка */

function sumOfSingleDigits() {
	let array = Array.from({length: 10}, () => Math.floor(Math.random() * (10 - 1) + 1));
  let sum = 1;
  array.forEach(item => {
	sum = item * sum;
	});
  console.log(array);
	console.log(sum);
}

sumOfSingleDigits()

/* Task 2
Составьте программу, которая создаёт список и заполняет его 100-и случайными числами из диапазона 1...999.
Программа должна вывести на экран максимальное и минимальное значения элементов списка. */

function listOfNumbers() {
   const array = Array.from({length: 100}, () => Math.round(Math.random() * (999 - 1) + 1));
   const minNumber = Math.min(...array);
   const maxNumber = Math.max(...array);
   console.log(`Минимальное число - ${minNumber} \n Максимальное число - ${maxNumber}`);
}

listOfNumbers()
