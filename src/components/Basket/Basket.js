import { useEffect, useState } from "react";
import Sales from "../../services/Sales";
import {
  priceAfterDeliveryCharges,
  calculateTotal,
} from "../../utilities/Helper";
import ProductList from "./ProductList";

const Basket = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [deliveryCharges, setDeliveryCharges] = useState([]);
  const [offers, setOffers] = useState([]);

  let cartTotal = calculateTotal(cart, items, offers);
  cartTotal = priceAfterDeliveryCharges(cartTotal, deliveryCharges);
  const addToCart = (item) => setCart((currentCart) => [...currentCart, item]);
  const removeFromCart = (item) => {
    setCart((currentCart) => {
      const indexOfItemToRemove = currentCart.findIndex(
        (cartItem) => cartItem.code === item.code
      );

      if (indexOfItemToRemove === -1) {
        return currentCart;
      }

      return [
        ...currentCart.slice(0, indexOfItemToRemove),
        ...currentCart.slice(indexOfItemToRemove + 1),
      ];
    });
  };

  const numberOfItems = (code) =>
    cart.filter((item) => item.code === code).length;

  const loadData = async () => {
    const res = await Sales.getSalesData();
    setItems(res.products);
    setDeliveryCharges(res.deliveryCharges);
    setOffers(res.offers);
    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="center">
      <div className="center">
        <div className="thick">STORE</div>
        <ProductList items={items} label="Add" action="add" handleSubmit={addToCart} />
      </div>
      <div className="center">
        <div className="thick">CART</div>
        <ProductList
          items={items}
          label="Remove"
          action="remove"
          handleSubmit={removeFromCart}
          handleNoOfItems={numberOfItems}
        />
      </div>
      <div className="thick">Total: ${cartTotal.toFixed(3)}</div>
      <div>
        <button
          className="button"
          data-testid="btn-reset"
          onClick={() => setCart([])}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Basket;
