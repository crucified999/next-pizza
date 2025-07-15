import { NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma-client";

export async function GET() {
  const products = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      image: true,
      categoryId: true,
      items: {
        select: {
          price: true,
          size: true,
          pizzaType: true,
        }
      }
    }
  });

  return NextResponse.json({ success: true, data: products });
}