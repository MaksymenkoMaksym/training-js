
/*
Complete the method / function so that it converts dash / underscore delimited words into camel casing.
The first word within the output should be capitalized only if the original word was capitalized
    (known as Upper Camel Case, also often referred to as Pascal case).

    Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/
toCamelCase("the_stealth_warrior");
toCamelCase("The-Stealth-Warrior");

function firstLetterBig(string) {
    let result = '';

    if (string[0] !== string[0].toUpperCase()) {
        result = (string[0].toUpperCase());

        for (let i = 0; i < string.length - 1; i += 1) {

            result += string[i + 1]
        }
        return result;
    }
    return string
}

function toCamelCase(str) {
    let arr = []; // ['the', 'stealth', 'warrior']

    str.includes('-') ? arr = str.split("-") : arr = str.split("_");

    let result = arr[0];
    for (let i = 1; i < arr.length; i += 1) {

        result += firstLetterBig(arr[i]);

    }
    console.log(result)
}

