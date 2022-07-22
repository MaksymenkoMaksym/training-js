// Ми власники піцерії
// при потребі додайте аргументи у функції

// напиши функцію яка отримує масив піц які хоче юзер та повертає їх вартість
// результатом функції мають бути логи в консолі про результат виконання

function makePizza(pizzas) {
  const errorPizza = [];
  const orderedPizza = [];

  let totalPrice = null;

  for (const pizza of pizzas) {

    if (checkPizzaAndPrise(pizza) === 0) {
      errorPizza.push(pizza);

    }
    
    orderedPizza.push(pizza);

    totalPrice += checkPizzaAndPrise(pizza);

  }


  consolePizzas(totalPrice, errorPizza, orderedPizza);
}


makePizza( ["Paperoni", "Chicago", "PizaSSS"]);
// також зробіть коллбек який перевіряє чи є в наявності така піцца та її вартість
// якщо піци немає в наявності та поверніть нуль та не забудьте його обробити правильно, якщо піца є то поверніть її вартість

function checkPizzaAndPrise(pizza) {
  const pizzas = ["Paperoni", "Chicago", "California", "Detroit"]
  const prises = [25, 35, 28, 22]

  if (pizzas.includes(pizza)) {
    pizzas.indexOf(pizza);
    return prises[pizzas.indexOf(pizza)];
  } else {
    return 0;
  }
}

checkPizzaAndPrise("Chicago");

// після того як обробили замовлення зробіть логи для того, щоб мати можливість побачити що замовив юзер
function consolePizzas(totalPrice, errorPizza, orderedPizza) {
  console.log(`Ви замовили ${orderedPizza}. Загальна ціна замовлення: ${totalPrice} грн . Піцци з назвою ${errorPizza} нема в наявності`);
}
