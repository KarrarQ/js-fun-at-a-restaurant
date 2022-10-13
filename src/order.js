function takeOrder(orders, deliveryOrders) {
if(deliveryOrders.length < 3) {
   deliveryOrders = deliveryOrders.push(orders)
  } 
}

function refundOrder(orderNum, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if(orderNum === deliveryOrders[i].orderNumber) {
      deliveryOrders.splice(i, 1)
    }
  }
}

function listItems(deliveryOrders) {
  var listItem = [];
  for(var i = 0; i < deliveryOrders.length; i++) {
     listItem.push(deliveryOrders[i].item)
  } 
    return listItem.join(', ')
}

function searchOrder(deliveryOrders, orderItem) {
  var found = false
  for (var i = 0; i < deliveryOrders.length; i++) {
    if(deliveryOrders[i].item === orderItem) {
      found = true 
    }
  }
  return found
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}