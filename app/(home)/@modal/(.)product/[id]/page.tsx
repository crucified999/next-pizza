import { prisma } from "@/prisma/prisma-client";
import { ModalUI } from "@/shared/components/ui/modal/modal";
import { notFound } from "next/navigation";
// import ProductModal from "@/app/(home)/product/[id]/page";
import { Modal } from "@/shared/components/modal/modal";
import { Provider } from "react-redux";
import { store, useAppSelector } from "@/shared/services/store";
import { ProductModalUI } from "@/shared/components/ui/product-modal/product-modal";
import { use } from "react";
import { getPizzaDetails } from "@/lib/utils";
import ProductModal from "@/app/(home)/product/[id]/page";

export default async function ProductModalPage({
  params,
}: {
  params: { id: string };
}) {
  
  const product = await prisma.product.findFirst({
    where: {
      id: +params.id,
    },
    include: {
      ingredients: true,
      items: true,
    },
  });

  if (!product) {
    return <div>Not Found</div>
  }

  return (
    <Modal>
      {/* <ProductModalUI product={product} /> */}
      <ProductModal params={{ id: params.id }} /> 
    </Modal>
  );
}
