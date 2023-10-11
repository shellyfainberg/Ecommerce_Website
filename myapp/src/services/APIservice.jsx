import axios from "axios";

const getAllProducts = async () => {
  const resp = await axios.get("https://dummyjson.com/products");
  // console.log(resp.data.products);
  return resp.data.products;
};
const geProduct = async (id) => {
  const resp = await axios.get(`https://dummyjson.com/products/${id}`);
  console.log(resp.data);

  return resp.data;
};

export { getAllProducts, geProduct };
