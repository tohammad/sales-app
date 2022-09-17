# Sales System
Plates Co are the leading provider of made up dinner plates and they’ve contracted you to
create a proof of concept for their new sales system.
## They sell three products
| Product  | Code | Price  |
| ------------- | ---- | ------ |
| Red Plate     | R01  | $32.95 |
| Green Plate   | G01  | $24.95 |
| Blue Plate    | B01  | $7.95  |

To incentivise customers to spend more, delivery costs are reduced based on the amount spent.
Orders under $50 cost $4.95. For orders under $90, delivery costs $2.95. Orders of $90 or more
have free delivery.
They are also experimenting with special offers. The initial offer will be “buy one red plate, get
the second half price”.
# solution

Created a formula for the requirement “buy one red plate, get the second half price”.
- Formula = product_qty * product_price -
                (Math.floor(product_qty / 2)) * product_price / 2;
- Created a method calculateTotal(cart, items, offers) that returns the total cost of the basket, taking into account the offer rules.
- Created a method priceAfterDeliveryCharges(cartTotal, deliveryCharges) that returns the total cost of the basket, taking into account the delivery charges.
- Each time user add/remove product to cart, total amount is updated by calling above methods.

# steps to run unit tests
1. git clone git@github.com:tohammad/sales-app.git
2. cd sales-app
3. npm i
4. npm run test

# steps to run app
1. npm run start
2. npm run server

# screenshots

![image](https://user-images.githubusercontent.com/5390209/190857842-f5046150-71bc-478b-aea6-7afa56adcd87.png)

![image](https://user-images.githubusercontent.com/5390209/190857912-9f4865c3-923c-49bf-a723-13b167e09efe.png)



