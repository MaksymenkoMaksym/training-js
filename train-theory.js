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
// console.log(menu);

//Описание задачи: Напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом, null и т.п.
//* Ожидаемый результат: true если это объект, false в противном случае. ({ a: 1 }) => true, ([1, 2, 3]) => false

function isObject(element) {
    if (element !== null) {
        if (typeof element === 'object') {

            if (!Array.isArray(element)) {
                return true;
            }

        }
    }
    return false;
}
let a = 5;
// console.log(isObject([]));

//* Описание задачи: Напишите функцию, которая возвращает вложенный массив вида`[[key, value], [key, value]]`.
//  * Ожидаемый результат: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]

function objectToArray(obj) {
    let resultArray = [];
    for (const key in obj) {
        let array = [];
        array.push(key);
        array.push(obj[key]);
        resultArray.push(array);

        // if (Object.hasOwnProperty.call(object, key)) {
        //     const element = object[key];

        // }
    }
    return resultArray;
}

// console.log(objectToArray({ a: 1, b: 2 }))

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];

//     }
// }
//* Описание задачи: Напишите функцию, которая возвращает новый объект без указанных значений.
//* Ожидаемый результат: ({ a: 1, b: 2 }, 'b') => { a: 1 }

function removeKey(objects, char) {
    let resultObject = { ...objects };
    const array = Object.keys(resultObject);

    if (array.includes(char)) {
        delete resultObject[char]
    }

    return resultObject;
}

// console.log(removeKey({ a: 1, b: 2 }, 'b'))

//     * Описание задачи: Напишите функцию, которая делает поверхностную проверку объекта на пустоту.
//   * Ожидаемый результат: 
//      ({ }) => true,
//     ({ a: undefined }) => true,
//     ({ a: 1 }) => false
//         * Пустые значения: '', null, NaN, undefined

function isEmpty(data) {
    const array = Object.values(data); // Nan, null , '', 1

    for (const arr of array) {
        if (!!arr) {
            return false
        }

    }

    return true
}

// console.log(NaN >= 0)

// console.log(isEmpty({ a: 1, b: undefined })); // false
// console.log(isEmpty({ a: 'undefined' })); //  false
// console.log(isEmpty({ a: 1 })); // false
// console.log(isEmpty({ a: undefined })); // true
// console.log(isEmpty({})); // true


// 1 напишіть функцію, яка отримує об'єкт та масив полів яких не має в ньому бути та повертає новий об'єкт без цих полів


function without(obj, arr) {
    let result = {};
    let objarr = Object.keys(obj);
    console.log(objarr);
    for (const el of objarr) {

        if (!arr.includes(el)) {
            result[el] = obj[el];
        }
    }
    // return console.log(result)
}

// without(obj, arr);


// 3 напишіть функцію аналог includes / hasOwnProperty яка отримує об'єкт та масив полів наявність яких потрібно перевірити в об'єкті
let obj = { a: 2, b: 4 };
let arr = ['a', 'c'];

function includesProperty(obj, arr) {
    let objarr = Object.keys(obj);
    for (const key of arr) {

        if (!objarr.includes(key)) {
            return false;
        }

    }
    return true;
}
// console.log(includesProperty(obj, arr));





without(obj, arr);
// 2 напишіть функцію,яка повертає кількість полів в об'єкті

function countLengthObject(obj) { }

// 3 напишіть функцію аналог includes/hasOwnProperty яка отримує об'єкт та масив полів наявність яких потрібно перевірити в об'єкті

function includesProperty(obj, arr) { }

// 4 напишіть фунцію яка отримує об'єкт та тип даних строкою, і перевіряє чи всі ключ-значення в ньому по типу відповідають отриманому типу

function isSameType(obj, type) { }

// 5 напишіть фунцію, що отримує два об'єкти та порівнює чи в них однакові поля
// перевірка має бути не глибокою

function comparisonKeys(obj1, obj2) { }

// 6 напишіть функцію що отримує один об'єкт та перевіряє чи ключі та ключ-значння першого ідентичні у другому 
const obj1 = {
    name: "Maks",
    age: 29,
    car: "Toyota",
}
// const obj2 = {
//     name: "Anton",
//     age: 27,
//     car: "Audi",
// }

const obj2 = {
    name: "Maks",
    age: 29,
    car: "Toyota",
}

function comparisonObject(obj1, obj2) {
    const obj1Array = Object.keys(obj1);
    const obj2Array = Object.keys(obj2);

    const obj1ArrayV = Object.values(obj1);
    const obj2ArrayV = Object.values(obj2);

    for (const el of obj1Array) {

        if (!obj2Array.includes(el)) {
            return false
        }
        for (const el of obj1ArrayV) {
            if (!obj2ArrayV.includes(el)) {
                return false
            }
        }
    }
    return true
}

function comparisonObject(obj1, obj2) {
    const obj1Array = Object.keys(obj1);
    const obj2Array = Object.keys(obj2);

    const obj1ArrayV = Object.values(obj1);
    const obj2ArrayV = Object.values(obj2);

    for (const key in obj1) {
        if (!obj2.hasOwnProperty(key)) {

        }
    }

    for (const el of obj1Array) {

        if (!obj2Array.includes(el)) {
            return false
        }
        for (const el of obj1ArrayV) {
            if (!obj2ArrayV.includes(el)) {
                return false
            }
        }
    }
    return true
}

// console.log(comparisonObject(obj1, obj2))

let object = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso',

}
'wels'
function greet(language) {
    const { languag = 'english' } = object;

    return console.log(object[language] ? object[language] : object['english']);

    // if (object[language] === undefined) {
    //     return console.log(object['english'])
    // }





    //return console.log(object[language] ?? object['english']);
}

greet('wels')


shuffleIt([1, 2, 3, 4, 5], [1, 2]) //should return [1, 3, 2, 4, 5]


function shuffleIt(arr, ...arrays) {

    for (const v of arrays) {
        let [x, y] = v; //[3,5]

        let x1 = arr[x]; // 5
        let y1 = arr[y];//81

        arr[x] = y1; //
        arr[y] = x1; //
    }

}

let array = [1, 2, 81, 5, 67, 5, 5];
let arrays = [[1, 2], [3, 5]]