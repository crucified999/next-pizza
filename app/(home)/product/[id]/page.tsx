'use client';

import { ProductModalUI } from "@/shared/components/ui/product-modal/product-modal";
import { fetchIngredients, fetchProductById, selectModalProduct, selectOrderModalData } from "@/shared/services/slices/nextPizzaSlice";
import { useAppDispatch, useAppSelector } from "@/shared/services/store";
import React, { useEffect } from "react";

export default function ProductModal({ params }: { params: { id: string } }) {
  const { id } = params;

  const dispatch = useAppDispatch();
  const product = useAppSelector(selectModalProduct);
  const orderModalData = useAppSelector(selectOrderModalData);

  useEffect(() => {
    dispatch(fetchProductById(+id));
    
    if (product?.categoryId === 1) dispatch(fetchIngredients());
  }, [dispatch]);

  return (
    
      <ProductModalUI product={product} ingredientsPrice={orderModalData.price} />
    
  );
}