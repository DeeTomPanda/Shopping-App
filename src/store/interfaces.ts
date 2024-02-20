import { create } from "react-test-renderer";

export interface productsType {
  id: number;
  description: string;
  price: number;
  title: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface rootState {
  products: productsType[];
  selectedProducts: productsType[];
}

export const createNewProduct = (): productsType => {
  return {
    id: 0,
    description: "",
    price: 0,
    title: "",
    category: "",
    thumbnail: "",
    images: [],
  };
};
