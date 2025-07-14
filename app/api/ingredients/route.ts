import { NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma-client";

export async function GET() {
  const ingredients = await prisma.ingredient.findMany({
    select: {
      products: true,
      id: true,
      name: true,
      image: true,
      price: true,
    }
  });

  return NextResponse.json({ success: true, data: ingredients });
}