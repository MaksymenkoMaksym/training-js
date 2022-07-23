// You probably know the "like" system from Facebook and other pages.People can "like" blog posts, pictures or other items.We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item.It must return the display text as shown in the examples:

// []-- > "no one likes this"
// ["Peter"]-- > "Peter likes this"
// ["Jacob", "Alex"]-- > "Jacob and Alex like this"
// ["Max", "John", "Mark"]-- > "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]-- > "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

function likes(names) {
    let countUser = names.length;
    let result = '';
    // for (name of names) {
    //     countUser += 1;
    // }
    switch (countUser) {
        case 0:
            result = 'no one likes this';
            break;
        case 1:
            result = `${names[0]} likes this`
            break;
        case 2:
            result = `${names[0]} and ${names[1]} like this`
            break;
        case 3:
            result = `${names[0]}, ${names[1]} and ${names[2]} like this`
            break;
        default:
            result = `${names[0]}, ${names[1]} and ${countUser - 2} others like this`
            break;
    }

    // if (countUser === 1) {
    //     result = `${names[0]} likes this`
    // }
    // if (countUser === 2) {
    //     result = `${names[0]} and ${names[1]} like this`
    // }
    // if (countUser === 3) {
    //     result = `${names[0]}, ${names[1]} and ${names[1]} like this`
    // }

    // result = `${names[0]}, ${names[1]} and ${countUser - 2} others like this`


    console.log(result);
}


function likes(names) {
    var templates = [
        'no one likes this',
        '{name} likes this',
        '{name} and {name} like this',
        '{name}, {name} and {name} like this',
        '{name}, {name} and {n} others like this'
    ];
    var idx = Math.min(names.length, 4);

    return templates[idx].replace(/{name}|{n}/g, function (val) {
        return val === '{name}' ? names.shift() : names.length;
    });
}

likes(['Alex', 'Jacob', 'Mark', 'Max', 'Anton']);

likes(['Alex', 'Jacob', 'Mark'])

likes(['Alex', 'Jacob'])

likes(['Alex'])