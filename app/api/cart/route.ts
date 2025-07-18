import { NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma-client";

export async function GET() {
  const cart = await prisma.cart.findMany({
    include: {
      items: true,
    }
  });

  return NextResponse.json({ success: true, data: cart });
}