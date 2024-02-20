import axios from "axios";
import { productsType } from "../store/interfaces";

const fetchData = (): Promise<productsType[]> => {
  return new Promise((res, rej) => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        res(response.data.products);
      })
      .catch((err) => rej(err));
  });
};
export default fetchData;
