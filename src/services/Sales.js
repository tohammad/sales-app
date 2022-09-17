import { API_ENDPOINT } from "./Constants";

const getSalesData = () => {
  return fetch(`${API_ENDPOINT}/data`)
  .then((response) => response.json())
};

const Sales = {
  getSalesData,
};

export default Sales;