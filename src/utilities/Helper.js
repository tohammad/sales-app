const groupReducer = (group, product) => {
  const { code } = product;
  group[code] = group[code] ?? [];
  group[code].push(product);
  return group;
};

export const calculateTotal = (cart, items, offers) => {
  let cartTotal = 0;
  if (cart.length <= 0) {
    return cartTotal;
  }
  let ItemCounts = cart.reduce(groupReducer, {});
  items.forEach((item) => {
    let offer = offers.find((o) => o.code === item.code);
    if (offer) {
      switch (offer.discount) {
        case "50%OFF":
          if (ItemCounts[item.code]) {
            if (ItemCounts[item.code].length > 1) {
              cartTotal +=
                ItemCounts[item.code].length * item.price -
                (Math.floor(ItemCounts[item.code].length / 2)) * item.price / 2;
            } else {
              cartTotal += ItemCounts[item.code].length * item.price;
            }
          }
          break;
        default:
          break;
      }
    } else {
      if (ItemCounts[item.code]) {
        cartTotal += item.price * ItemCounts[item.code].length;
      }
    }
  });

  return cartTotal;
};

export const priceAfterDeliveryCharges = (cartTotal, deliveryCharges) => {
  if (cartTotal > 0) {
    let chargeResult = deliveryCharges.find(
      (dc) =>
        cartTotal >= dc.totalAmount.low && cartTotal <= dc.totalAmount.high
    );
    if (chargeResult) {
      return (cartTotal = cartTotal + chargeResult.charge);
    }
  }
  return cartTotal;
};
