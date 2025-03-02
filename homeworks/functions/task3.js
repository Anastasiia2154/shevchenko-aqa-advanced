const order = function checkOrder(available, ordered) {
    if (ordered === 0) {
      return "Your order is empty";
    }
    if (ordered > available) {
      return "Your order is too large, we don’t have enough goods.";
    }
    return "Your order is accepted";
  }
  
  console.log(order(3, 10));
