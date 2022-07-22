const user = {
  age: 18,
  gender: "woman", // "man" | "woman"
  balance: 5000,
  status: "vip", // 'user', 'admin', 'vip'
  items: {
    cars: ["BMW", "Lamborgini", "Toyota"]
  }
}


function womanFree() {

  if (user.age < 18) {
    console.log("Вам немає 18")
  } else if (user.gender === 'woman') {
    console.log("Для вас вхід безкоштовний")
  } else if (user.balance >= 2000) {
    console.log("З вашого рахунку знято 2000, ви можете ввійти")
  } else console.log("У вас недостатньо коштів")
}

function vipMeeting() {
  if (user.age < 18) {
    console.log("Вам немає 18")
  } else if (user.status !== 'vip') {
    console.log("Вас немає у списку запрошених")
  } else if (user.balance >= 5000) {
    console.log("З вашого рахунку знятo 5000, можете ввійти")
  } else console.log('У вас недостатньо коштів')
}


function bmwOwner() {

  if (user.age < 18) {
    console.log("Вам немає 18")
  } else if (!user.items.cars.includes("BMW")) {
    console.log("У вас немає відповідної машини")
  } else if (user.balance >= 2000) {
    console.log("З вашого рахунку знятo 1000, можете їхати")
  } else console.log('У вас недостатньо коштів')

}
bmwOwner()
// для того щоб працювала одна із функцій
// розкоментуй наступний рядок
// із потрібною тобі функцією

/* vipMeeting() */
/* womanFree() */