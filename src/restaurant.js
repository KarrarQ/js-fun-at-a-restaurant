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
  if(foodItem.type === 'lunch' && !restaurant.menus.lunch.includes(foodItem)) {
    restaurant.menus.lunch.push(foodItem)
  } else if(foodItem.type === 'breakfast' && !restaurant.menus.breakfast.includes(foodItem)) {
    restaurant.menus.breakfast.push(foodItem)
  } else if (foodItem.type === 'dinner' && !restaurant.menus.dinner.includes(foodItem)) {
    restaurant.menus.breakfast.push(foodItem)
  }    
}

function removeMenuItem(menu, order, time) {
  for (var i = 0; i < menu.menus[time].length;i++) {
if (menu.menus[time][i].name === order) {
    menu.menus[time].splice(i, 1)
  return `No one is eating our ${order} - it has been removed from the ${time} menu!`  
}
}
return `Sorry, we don't sell ${order}, try adding a new recipe!`
}

// function removeMenuItem(restaurant, food, type) {
//   for (var i = 0; i < restaurant.menus[type].length; i++) {
//     if(restaurant.menus[type][i].name === food) {
//     restaurant.menus[type].splice(i, 1)
//     return `No one is eating our ${food} - it has been removed from the ${type} menu!`
//     }
//   }

//   // if (!restaurant.menus[type].includes(food)) {
//     return `Sorry, we don't sell ${food}, try adding a new recipe!`
//   }




module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}