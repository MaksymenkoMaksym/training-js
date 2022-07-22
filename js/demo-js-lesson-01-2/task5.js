// todo Форматування посилання (includes та логічне «І»)
/*
 * Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. 
Якщо ні, додай у кінець значення link цей символ, але тільки в тому випадку, якщо в link є підрядок "my-site". 
Використовуй конструкцію if...else.
 */

// let link = 'https://somesite.com/about';

// if (link.includes('my-site') && !link.endsWith('/')) {
//   console.log(link + '/');
// } else {
//   console.log(link);
// }


// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const clientsы = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clientsы.slice()); // ["Poly", "Kiwi"]

const checkPasswordButton = document.querySelector('button');

const passwordInput = document.querySelector('input');

const password = passwordInput.value;
const result = document.querySelector('Result')


checkPasswordButton.addEventListener('click', function checkPassword() {

  const ADMIN_PASSWORD = "goga";
  // Change code below this line


  if (passwordInput.value !== ADMIN_PASSWORD) {
    return console.log("Access denied, wrong password!");
  }
  return Result.value = 'Welcome';
  return console.log("Welcome!");
}
)

// function count(countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// }

// count(1, 5,2); // countFrom = 1, countTo = 5, step = 1
// count(2); // countFrom = 2, countTo = 10, step = 1
// count(); // countFrom = 0, countTo = 10, step = 1

// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
// words = message.split(delimeter)
//   // Change code above this line
//   return console.log(words);
// }
// splitMessage("Mango,hurries,to,the,train", ",")


// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//   let twoArray = firstArray.concat(secondArray);

//    if (twoArray.length > maxLength)
//    {return console.log(twoArray.slice(0,maxLength))}
//    return console.log(twoArray);
//     // Change code above this line
// }

//   makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)

//   function calculateTotal(number) {
//  // Change code below this line
//  let total = 0;
//   for (let i=1; i < number, i+=1;) 
//   {
//     total = total + i;
//   }
//   console.log(total)
//   // Change code above this line
// }

// calculateTotal(3)

// function findLongestWord(string) {
//   // Change code below this line
//   const array = string.split(' ');
//   let word = array[0];

//   for (let i = 1; i < array.length; i += 1) {

//     if (array[i].length > word.length) {
//       word = array[i];
//     }
//   }

//   console.log(word);
//   // Change code above this line
// }

// findLongestWord("The quick brown fox jumped over the lazy dog");

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) { numbers.push(i); }
//   // Change code above this line
//   return console.log(numbers);
// }
// createArrayOfNumbers(1, 3)

// function filterArray(numbers, value) {
//   // Change code below this line
//   let newArray = [];
//   for (const element of numbers) {
//     if (element <= value) { continue; }
//     newArray.push(element)
//     // Change code above this line
//   } console.log(newArray);
// }

// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([12, 24, 8, 41, 76], 20);
// filterArray([12, 24, 8, 41, 76], 38);

function getCommonElements(array1, array2) {
  // Change code below this line
  let arr = [];

  for (const number of array1) {
    if (array2.includes(number)) {
      arr.push(number)
    }
  }

  console.log(arr)

  // Change code above this line
}
getCommonElements([1, 2, 3], [2, 1, 17, 19]) // повертає [1, 2]

for (let i = 0; i <= 5; i += 1) {
  console.log(i);

  if (i === 3) {
    console.log("Знайшли число 3, перериваємо виконання циклу");
    break;
  }
}

console.log("Лог після циклу");