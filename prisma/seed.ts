import { categories, products } from "./constants";
import { prisma } from "./prisma-client";

async function load() {
  await prisma.category.createMany({
    data: categories
  });

  await prisma.product.createMany({
    data: products
  })
}

async function clear() {
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await clear();
    await load();
  } catch (error) {
    console.error(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });