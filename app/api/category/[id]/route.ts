import { NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma-client";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const category = await prisma.category.findUnique({
    where: {
      id: Number(params.id)
    },
  });

  return NextResponse.json({ success: true, data: category });
}