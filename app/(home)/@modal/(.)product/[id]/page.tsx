import { prisma } from "@/prisma/prisma-client";
import { ModalUI } from "@/shared/components/ui/modal/modal";
import { notFound } from "next/navigation";
import ProductModal from "@/app/(home)/product/[id]/page";
import { Modal } from "@/shared/components/modal/modal";
import { Provider } from "react-redux";
import { store } from "@/shared/services/store";
import { ProductModalUI } from "@/shared/components/ui/product-modal/product-modal";

export default async function ProductModalPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findFirst({
    where: {
      id: +id,
    },
    include: {
      ingredients: true,
      items: true,
    },
  });

  console.log('Product:', product);
  // if (!product) {
  //   return notFound();
  // }

  return (
    
      <Modal>
        <ProductModalUI product={product} />
      </Modal>
    
  );
}
