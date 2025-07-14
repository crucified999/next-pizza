import { NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma-client";

export async function GET() {
  const products = await prisma.product.findMany({
    select: {
      id: true,
      title: true,
      price: true,
      image: true,
      categoryId: true,
      ingredients: true,
    }
  });

  return NextResponse.json({ success: true, data: products });
}