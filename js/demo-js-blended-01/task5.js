/*
 * У змінній min лежить число від 0 до 59.Визначте, 
в яку чверть години потрапляє це число 
(у першу, другу, третю чи четверту).
 */

const min = 4;

let value;

if (min > 0 && min <= 15) { value = 'First ' }

else if (min > 15 && min <= 30) { value = 'Second' }
else if (min > 30 && min <= 45) { value = 'Third' }
else { value = 'Fourth ' }


console.log(value)