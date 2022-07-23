// Створіть порожній об’єкт user.
// Додайте властивість name зі значенням Іван.
// Додайте властивість surname зі значенням Сміт.
// Змініть значення name на Петро.
// Видаліть властивість name з об’єкта.

const user = {
    name: 'Ivan',
    surname: "Smith",
};

// console.log(user)
// user.name = 'Petro';
// console.log(user)
// delete user.name;
// console.log(user)

// Напишіть функцію isEmpty(obj), яка повертає true, якщо об’єкт не має властивості, інакше false
let obje = {};
function isEmpty(obj) {
    if (obj in obje) {
        return true;
    }
    else { return false }
}
// console.log(isEmpty(''))

// У нас є об’єкт для зберігання заробітної плати нашої команди:

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// Напишіть код для підсумовування всіх зарплат і збережіть у змінній sum.У наведеному вище прикладі має бути 390.

// Якщо об’єкт salaries порожній, то результат має бути 0.

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

// let { names, wage } = salaries;

let sum = 0;

for (let key in salaries) {
    sum += salaries[key];
}

// console.log(sum)

// Помножте числові значення властивостей на 2
// важливість: 3
// Створіть функцію multiplyNumeric(obj), яка примножує всі числові властивості об’єкта obj на 2.

// Наприклад:

// // до виклику функції
// let menu = {
//     width: 200,
//     height: 300,
//     title: "Моє меню"
// };

// multiplyNumeric(menu);

// // після виклику функції
// menu = {
//     width: 400,
//     height: 600,
//     title: "Моє меню"
// };
// Зверніть увагу, що multiplyNumeric не потрібно нічого повертати.Слід безпосередньо змінювати об’єкт.

//     P.S.Використовуйте typeof для перевірки, що значення властивості числове.
let menu = {
    width: 200,
    height: 300,
    title: "Моє меню"
};

function multiplyNumeric(obj) {

    for (let key in obj) {

        if (typeof (obj[key]) === 'number') {
            obj[key] = obj[key] * 2;
        }
    }

}
multiplyNumeric(menu)
console.log(menu);