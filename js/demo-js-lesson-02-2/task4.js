// todo Логування елементів
/*
 * Напиши функцію logItems(items), яка отримує масив і використовує цикл for,
який для кожного елемента масиву виводитиме в консоль повідомлення 
у форматі <номер елемента> - <значення елемента>. 
Нумерація елементів має починатися з першого.

* Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] 
з індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
 */

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

function logItems(items) {

    for (let i = 0; i < items.length; i++) {
        const element = items[i];
        console.table(`${i + 1}-${items[i]}`);
    }

}