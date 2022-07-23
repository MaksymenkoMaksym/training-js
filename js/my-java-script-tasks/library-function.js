// Ви власник бібліотеки

/* вам потрібно написати функціонал щоб 

- брати книги (переміщати книги між масивами при взятті чи поверненні в бібліотеку)

- перевіряти чи є така книга (чи є саме в бібліотеці або її хтось взяв)

- купляти книги (вартість книги це кількість символів в назві*10)

- для того, щоб масив із книгами був один на всі виклики та працював вірно він має залишатись глобальним

- також функція, яка буде виводити у консоль всі помилки та результати

- ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! !
- !  використайте switch для функції із логами  !
- ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! !
*/


const bookInLibriry = ["Worn", 'Velorio by Xavier', "Dreaming by Xochitl", "Verifiers by Jane Pek", "Hello world"]
const orderedBook = ["Spiderman", "50 shades", "50"]

function orderBook(book) {

    const indexInLibriry = bookInLibriry.indexOf(book);

    if (indexInLibriry >= 0) {
        bookInLibriry.splice(indexInLibriry, 1, `on hand - ${book}`);
        orderedBook.push(book);
        return `Ти взяв в оренду ${book}`;
    }
    return 'Книга продана або в оренді'

}


function returnBook(book) {

    const indexInOrderedBook = orderedBook.indexOf(book);
    const indexInLibriry = bookInLibriry.indexOf(book);
    const indexOnHand = bookInLibriry.indexOf(`on hand ${book}`);

    if (indexInOrderedBook < 0) {
        return `В тебе немає такої книги ${book}`
    }

    else if (indexInOrderedBook >= 0) {
        orderedBook.splice(indexInOrderedBook, 1)
    }

    if (indexInLibriry < 0 && indexOnHand < 0) {
        bookInLibriry.push(book);
    }

    if (indexOnHand > 0) {
        bookInLibriry.splice(indexOnHand, 1, book)
    }

    return `Ти повернув книгу ${book} в бібліотеку`
}


function buyBook(book) {
    const indexInLibriry = bookInLibriry.indexOf(book);

    if (book === undefined) {
        return 'undefined'
    }

    const bookArray = book.split("");
    let pricePerBook = 0;

    for (const char of bookArray) {
        pricePerBook += 10;
    }

    if (indexInLibriry >= 0) {
        bookInLibriry.splice(indexInLibriry, 1, `Sold out - ${book}`);



        orderedBook.push(book);
        return `Ти купив ${book}. Ти витратив ${pricePerBook}$`;
    }
    return 'Книга продана або в оренді'

}

function consoleBook(book) {

    if (book === null) {
        return;
    }

    let action = prompt("Щоб взяти книгу оренду - 1, повернути - 2, купити - 3");  //  0

    if (action === null) {
        return;
    }
    action = Number(action);
    console.log(book);

    while (action > 3 || action === 0 || action <= -1 || Number.isNaN(action)) {
        action = prompt("Виберіть дію: Оренда - 1, повернути - 2, купити - 3");

        if (action === null) {
            return;
        }

        action = Number(action);
    }

    switch (action) {
        case 1:
            alert(orderBook(book));
            console.log("bookInLibriry", bookInLibriry);
            console.log("orderedBook", orderedBook);

            desicion();
            break;
        case 2:
            alert(returnBook(book));
            console.log("bookInLibriry", bookInLibriry);
            console.log("orderedBook", orderedBook);
            desicion();
            break;
        case 3:
            alert(buyBook(book));
            console.log("bookInLibriry", bookInLibriry);
            console.log("orderedBook", orderedBook);
            desicion();
            break;
    }

}


function desicion() {
    console.log("bookInLibriry", bookInLibriry);
    console.log("orderedBook", orderedBook);
    let desicion = confirm("Ви хочете щось зробити з книгою?");

    if (desicion) {
        let book = "";
        let escaped = true;

        book = prompt("Ведіть назву книги");
        console.log(book);
        if (book === null) {
            alert("До зустрічі!");
            console.log("До зустрічі!");
            return;
        }

        while (!bookInLibriry.includes(book) && !orderedBook.includes(book) && escaped) {
            book = prompt("Щось пішло не так...Ведіть назву книги ще раз")
            if (book === null) {
                escaped = false;
            }
        }

        consoleBook(book);
    }
    alert("До зустрічі!");
    console.log("До зустрічі!");
}

desicion();
