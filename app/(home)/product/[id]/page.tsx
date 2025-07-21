'use client';

import { getPizzaDetails } from "@/lib/utils";
import { prisma } from "@/prisma/prisma-client";
import { ProductModalUI } from "@/shared/components/ui/product-modal/product-modal";
import { fetchProductById, selectModalProduct, selectPizzaSize, selectPizzaType } from "@/shared/services/slices/nextPizzaSlice";
import { useAppDispatch, useAppSelector } from "@/shared/services/store";
import React, { use, useEffect } from "react";

export default function ProductModal({ params }: { params: Promise<{ id: string }> }) {

  const { id } = use(params);

  const dispatch = useAppDispatch();
  const product = useAppSelector(selectModalProduct);

  // const product = await prisma.product.findFirst({
  //   where: {
  //     id: +id,
  //   },
  //   include: {
  //     ingredients: true,
  //     items: true,
  //   },
  // });

  // if (!product) {
  //   return <div>Not Found</div>
  // }

  useEffect(() => {
    dispatch(fetchProductById(+id));
  }, [dispatch]);

  return (
    <div className="px-30 py-10">
      <ProductModalUI product={product} />
    </div>
  );
}