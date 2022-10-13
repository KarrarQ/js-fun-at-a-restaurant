function nameMenuItem(menuItemName) {
  return `Delicious ${menuItemName}`
};

function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type
  }
};

function addIngredients(food, ingredients) {
  if(ingredients.includes(food) === false) {
  ingredients.push(food)
  }
}

function formatPrice(initialPrice) {
  return '$' + initialPrice
}

function decreasePrice(decreasedPrice) {
  return decreasedPrice - (decreasedPrice * .1)
}

function createRecipe(title, ingredients, type) {
  return {
    title: title,
    ingredients: ingredients,
    type: type
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


