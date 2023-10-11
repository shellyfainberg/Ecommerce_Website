import axios from "axios";

const getAllProducts = async () => {
  const resp = await axios.get("https://dummyjson.com/products");
  return resp.data.products;
};
const geProduct = async (id) => {
  const resp = await axios.get(`https://dummyjson.com/products/${id}`);
  return resp.data;
};

export { getAllProducts, geProduct };
