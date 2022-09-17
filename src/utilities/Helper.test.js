import { priceAfterDeliveryCharges, calculateTotal } from "./Helper";
import { data } from "../test/mock/data";
import {
  cart_scenario_1,
  cart_scenario_2,
  cart_scenario_3,
  cart_scenario_4,
} from "../test/mock/cart";
describe("Helper Functions", () => {
  test("scenario 1 without delivery charge", async () => {
    let cartTotal = await calculateTotal(
      cart_scenario_1,
      data.products,
      data.offers
    );
    expect(cartTotal.toFixed(3)).toBe("32.900");
  });

  test("scenario 2 without delivery charge", async () => {
    let cartTotal = await calculateTotal(
      cart_scenario_2,
      data.products,
      data.offers
    );
    expect(cartTotal.toFixed(3)).toBe("49.425");
  });

  test("scenario 3 without delivery charge", async () => {
    let cartTotal = await calculateTotal(
      cart_scenario_3,
      data.products,
      data.offers
    );
    expect(cartTotal.toFixed(3)).toBe("57.900");
  });

  test("scenario 4 without delivery charge", async () => {
    let cartTotal = await calculateTotal(
      cart_scenario_4,
      data.products,
      data.offers
    );
    expect(cartTotal.toFixed(3)).toBe("98.275");
  });

  test("scenario 1 with delivery charge", async () => {
    let cartTotal = await calculateTotal(
      cart_scenario_1,
      data.products,
      data.offers
    );
    cartTotal = await priceAfterDeliveryCharges(
      cartTotal,
      data.deliveryCharges
    );
    expect(cartTotal.toFixed(3)).toBe("37.850");
  });

  test("scenario 2 with delivery charge", async () => {
    let cartTotal = await calculateTotal(
      cart_scenario_2,
      data.products,
      data.offers
    );
    cartTotal = await priceAfterDeliveryCharges(
      cartTotal,
      data.deliveryCharges
    );
    expect(cartTotal.toFixed(3)).toBe("54.375");
  });

  test("scenario 3 with delivery charge", async () => {
    let cartTotal = await calculateTotal(
      cart_scenario_3,
      data.products,
      data.offers
    );
    cartTotal = await priceAfterDeliveryCharges(
      cartTotal,
      data.deliveryCharges
    );
    expect(cartTotal.toFixed(3)).toBe("60.850");
  });

  test("scenario 4 with delivery charge", async () => {
    let cartTotal = await calculateTotal(
      cart_scenario_4,
      data.products,
      data.offers
    );
    cartTotal = await priceAfterDeliveryCharges(
      cartTotal,
      data.deliveryCharges
    );
    expect(cartTotal.toFixed(3)).toBe("98.275");
  });
});
