// todo Індекс маси тіла
/*
 * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини.
Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини за метри.

* Вага та висота будуть спеціально передані як рядки.
Нецілі числа можуть бути задані у вигляді 24.7 або 24,7,
 тобто як роздільник дробової частини може бути кома.

* Індекс маси тіла необхідно округлити до однієї цифри після коми;
 */

// result -  28.8
calcBMI('14,5', '17,8');

function calcBMI(weight, height) {
    const weightToNumber = Number(weight.replace(',', '.'));
    const heightToNumber = Number(height.replace(',', '.'));
    const result = weightToNumber / (heightToNumber * heightToNumber);
    return parseFloat(result.toFixed(1));


}
console.log(calcBMI('93,7', '1,8'));

/*
The snail climbs up 7 feet each day and slips back 2 feet each night.
How many days will it take the snail to get out of a well with the given depth?

Sample Input:
31

Sample Output:
6

Explanation: Let's break down the depth the snail covers each day:
Day 1: 7-2=5
Day 2: 5+7-2=10
Day 3: 10+7-2=15
Day 4: 15+7-2=20
Day 5: 20+7-2=25
Day 6: 25+7=32
So, on Day 6 the snail will reach 32 feet and get out of the well at day,
without slipping back that night.
Hint: You can use a loop to calculate the depth the snail covers each day,
and break the loop when it reaches the desired depth.
*/
let depth = 132;

const perDayAhead = 7;
const perNightBack = 2;

let totalDays = 0;

for (let i = 0; i <= depth; i += 1) {
    totalDays += 1;
    depth = (depth - perDayAhead) + perNightBack;

    if (depth <= perDayAhead) { totalDays = totalDays + 1; break; }
}

console.log(totalDays, '\t');



function main() {
    var depth = parseInt(readLine(), 10);
    //your code goes here

}


