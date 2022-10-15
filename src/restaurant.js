function createRestaurant(resName) {
  return{
    name: resName,
      menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
}

function addMenuItem(restaurant, foodItem) {
  if (foodItem.type === `lunch` && !restaurant.menus.lunch.includes(foodItem)) {
    restaurant.menus.lunch.push(foodItem)
  } else if(foodItem.type === `breakfast` && !restaurant.menus.breakfast.includes(foodItem)) {
    restaurant.menus.breakfast.push(foodItem)
  } else if(foodItem.type === `dinner` && !restaurant.menus.dinner.includes(foodItem)) {
    restaurant.menus.dinner.push(foodItem)
        }
      }

 function removeMenuItem(restaurant, food, type) {
    for (var i = 0; i < restaurant.menus[type].length; i++) {
      restaurant.menus[type].splice(i, 1)
      return `No one is eating our ${food} - it has been removed from the ${type} menu!`
    }
    if (!restaurant.menus[type].includes(food)) {
    return `Sorry, we don't sell ${food}, try adding a new recipe!`
  }
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}