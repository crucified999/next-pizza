'use client';

import { ProductModalUI } from "@/shared/components/ui/product-modal/product-modal";
import { fetchProductById, selectModalProduct } from "@/shared/services/slices/nextPizzaSlice";
import { useAppDispatch, useAppSelector } from "@/shared/services/store";
import { use, useEffect } from "react";

export default function ProductModal({ params }: { params: Promise<{ id: string }> }) {

  const { id } = use(params);

  const dispatch = useAppDispatch();

  const product = useAppSelector(selectModalProduct);

  console.log(product);

  useEffect(() => {
    dispatch(fetchProductById(+id));
  }, [dispatch]);

  return (
    <ProductModalUI product={product} />
  );
}