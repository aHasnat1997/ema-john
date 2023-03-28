const totalCalculation = card => {
  let totalPrice = 0;
  let shipping = 0;
  let quantity = 0;
  for (const item of card) {
    item.quantity = item.quantity || 1;
    totalPrice += item.price*item.quantity;
    shipping += item.shipping;
    quantity += item.quantity;
  }
  const tex = (totalPrice * 7) / 100;
  const total = totalPrice + shipping + tex;

  return { totalPrice, shipping, tex, total, quantity };
};

export default totalCalculation;
