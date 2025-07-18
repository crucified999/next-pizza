import { NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma-client";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const product = await prisma.product.findFirst({
    where: {
      id: +params.id,
    },
    include: {
      ingredients: true,
      items: true,
    }
  })

  return NextResponse.json({ success: true, data: product });
}