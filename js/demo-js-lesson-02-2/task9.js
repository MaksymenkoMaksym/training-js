// todo Колекція курсів (includes, indexOf, push тощо)

/*
 * Напишіть функції для роботи з колекцією навчальних курсів courses:

* addCourse(name) - додає курс до кінця колекції
* removeCourse(name) - видаляє курс із колекції
* updateCourse(oldName, newName) - змінює ім'я на нове
 */

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

function addCourse(course) { if (courses.includes(course)) { return console.warn('1. This Course already exist') } courses.push(course), console.log(`1. ${courses}`) }

function removeCourse(course) {
    if (courses.includes(course)) { return courses.splice(courses.indexOf(course), 1), console.log(`2. ${courses}`) };
    console.log(`2. Course ${course} Not found`);
}

function updateCourse(oldName, newName) {
    if (!courses.includes(oldName)) { return console.log('3. This Course not found') }
    console.log(courses.splice(courses.indexOf(oldName), 1, newName))
}

addCourse('Express');
// ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse('CSS'); // 'У вас уже есть такой курс'

removeCourse('React');
// ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse('Vue'); // 'Курс с таким именем не найден'

updateCourse('Expres', 'NestJS'); // console.table(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
console.log(courses);
