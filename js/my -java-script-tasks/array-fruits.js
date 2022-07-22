/* const array = ['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🫐', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🥑', '🫒', '🍆', '🌶', '🫑', '🥒', '🥬', '🥦', '🧄', '🧅', '🌽', '🥕', '🥗', '🥔', '🍔', '🍟', '🌭', '🍕', '🍝', '🥪', '🌮', '🌯', '🫔', '🥙', '🧆', '🍜', '🥘', '🍲', ' 🍣', '🥚', '🍯', '🧀', '🥩'] */

const fruits = ['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🫐', '🍑', '🥭', '🍍', '🥥', '🥝', '🥑']

const vegetables = ['🫒', '🍆', '🌶', '🫑', '🥒', '🥬', '🥦', '🧄', '🧅', '🌽', '🥕', '🥔', '🍅']

const some = ['🥚', '🍯', '🧀']

const meet = ['🥩']

const cooked = ['🥗', '🍔', '🍟', '🌭', '🍕', '🍝', '🥪', '🌮', '🌯', '🫔', '🥙', '🧆', '🍜', '🥘', '🍲', '🍣']


// видаліть із масиву всі овочі
// потім фрукти
// потім лишіть лише приготовані страви
// та виведіть все у консоль

// що разу починайте роботу із початку, 
// а не продовжуйте з попереднім результатом

// Спробуйте виконати задачку різники способами
// slise / splice
// delete

const random = ['🍔', '🥑', '🫒', '🥔', '🧆', '🍏', '🌶', '🫑', '🥒', '🍑', '🫔']

let result = [];

for (const item of random) {
  if (vegetables.includes(item)) {
    continue;
  }

  result.push(item)
}
/* console.log(result) */

let result1 = [];
let count = 0;

while (count < random.length) {
  count += 1;
  if (!vegetables.includes(random[count])) {
    result1.push(random[count])
  }
}

/* console.log(result1) */

let result2 = [];
let result3;
for (let i = 0; i < random.length; i += 1) {

  if (!vegetables.includes(random[i])) {

    /* result2 = result2.concat(random[i]);*/

    result2.push(random.slice(i, i + 1).join(''));

  }
}

/*console.log(result2)*/


// користувач вирішив закупитись продуктами
// порахуйте варість корзини
// фрукти - 5
// овочі - 3
// готова їжа - 15

const userCart1 = ['🍔', '🫐', '🍓', '🍍', '🥥']
const userCart2 = ['🍕', '🍒', '🍲']
let sum = 0;

for (const product of userCart1.concat(userCart2)) {
  if (fruits.includes(product)) {
    sum += 5;
  } else if (vegetables.includes(product)) {
    sum += 3;
  } else if (cooked.includes(product)) {
    sum += 5;
  }
}


/*console.log(sum)*/

// Потрібно зробити масив унікальних значень()
const notUnique = ['🍔', '🍟', '🍎', '🍐', '🍊', '🍔', '🍎'] 


let unique2 = [];
for (const item of notUnique) {

  if (unique2.includes(item)) {
    continue;
  }

  unique2.push(item)
}


console.log(unique2);



let unique = [];
//console.log(notUnique);
for (let i = 0; i < notUnique.length; i += 1) {
  let temp = notUnique.slice(i + 1);
  //console.log("temp",temp, notUnique[i])
  //console.log(temp.includes(notUnique[i]))

  if (temp.includes(notUnique[i])) {
    notUnique.splice(i, 1)
    i--
  }

 /* console.log(temp)*/


}
console.log(notUnique);

// Потрібно розвернути масив. Аналог методу reverse()
const arr = ['🍏', '🍎', '🍒', '🫐']
let reversed = [];
const revercedBymethod = arr.reverse();

for (let i = arr.length - 1; i >= 0; i -= 1) {

  reversed.unshift(arr[i]);

}

/* console.log(reversed); */
/* console.log(revercedBymethod); */




