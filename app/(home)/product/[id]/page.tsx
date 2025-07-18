'use client';

import { ProductModalUI } from "@/shared/components/ui/product-modal/product-modal";
import { fetchProductById, selectModalProduct } from "@/shared/services/slices/nextPizzaSlice";
import { useAppDispatch, useAppSelector } from "@/shared/services/store";
import { useEffect } from "react";

export default function ProductModal({ params }: { params: { id: string } }) {

  const dispatch = useAppDispatch();

  const product = useAppSelector(selectModalProduct);

  console.log(product);

  useEffect(() => {
    dispatch(fetchProductById(+params.id));
  }, [dispatch]);

  return (
    <ProductModalUI product={product} />
  );
}