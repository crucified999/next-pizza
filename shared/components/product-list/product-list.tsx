import { useAppDispatch, useAppSelector } from "@/shared/services/store";
import { ProductListUI } from "../ui/product-list/product-list";
import { useEffect } from "react";
import { selectProducts } from "@/shared/slices/nextPizzaSlice";
import { fetchProducts } from "@/shared/slices/nextPizzaSlice";

// const products = [
//   {
//     id: "1",
//     title: "Пицца",
//     price: 100,
//     image: "/pizza.avif",
//     description: "Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок",
//     category: "Пицца",
//     amount: 0
//   },
//   {
//     id: "2",
//     title: "Пицца 2",
//     price: 200,
//     image: "/pizza.avif",
//     description: "Описание",
//     category: "Пицца",
//     amount: 1
//   },
// ]

export const ProductList = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);

  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);

  return (  
    <ProductListUI products={products} />
  )
}