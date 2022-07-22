// todo Логування контактів
/*
 * Напиши функцію printContactsInfo(names, phones) яка виводить у консоль ім'я та телефонний номер користувача.
 У параметри names і phones будуть передані рядки імен та телефонних номерів, розділені комами. 
 Порядковий номер імен та телефонів у рядках вказують на відповідність. 
 Кількість імен та телефонів гарантовано однакова
 */

printContactsInfo(
  'Jacob,William,Solomon,Artemis',
  '89001234567,89001112233,890055566377,890055566300',
);

function printContactsInfo(name, phone) {
  const names = name.split(',');
  const phones = phone.split(',');

  for (let i = 0; i < phones.length; i += 1) {
    console.log(`${i + 1}.${names[i]}-${phones[i]}`)
  }


}