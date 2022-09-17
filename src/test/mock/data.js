export const data = {
  products: [
    {
      name: "Red Plate",
      code: "R01",
      price: 32.95,
    },
    {
      name: "Green Plate",
      code: "G01",
      price: 24.95,
    },
    {
      name: "Blue Plate",
      code: "B01",
      price: 7.95,
    },
  ],
  deliveryCharges: [
    {
      totalAmount: { low: 90.0001 },
      charge: 0,
    },
    {
      totalAmount: { low: 50.001, high: 90 },
      charge: 2.95,
    },
    {
      totalAmount: { low: 0, high: 50 },
      charge: 4.95,
    },
  ],
  offers: [
    {
      code: "R01",
      discount: "50%OFF",
    },
  ],
};
