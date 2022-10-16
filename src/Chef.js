class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }
  greetCustomer(name, foodItem) {
    if(foodItem === true){
      return `Good morning, ${name}!`
     } else {
      return `Hello, ${name}!`
    }
  }
  checkForFood(foodItem) {
    if(foodItem.name === "Quiche" || foodItem.name === "Kouign Amann") {
      return `Sorry, we aren't serving ${foodItem.name} today.`
    } else {
      return `Yes, we're serving ${foodItem.name} today!`
    }
  }
}

module.exports = Chef;