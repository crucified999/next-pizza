import { categories, products, ingredients } from "./constants";
import { prisma } from "./prisma-client";

async function load() {
  await prisma.category.createMany({
    data: categories
  });

  await prisma.ingredient.createMany({
    data: ingredients
  });

  // await prisma.product.createMany({
  //   data: products.map((product, index) => ({
  //     ...product,
  //     ingredients: {
  //       connect: ingredients.slice(index, index + 3)
  //     }
  //   }))
  // });

  await prisma.product.create({
    data: {
      ...products[0],
      ingredients: {
        connect: ingredients.slice(0, 3),
      },
    },
  });

  await prisma.product.create({
    data: {
      ...products[1],
      ingredients: {
        connect: ingredients.slice(1, 4),
      },
    },
  });

  await prisma.product.create({
    data: {
      ...products[2],
      ingredients: {
        connect: ingredients.slice(2, 5),
      },
    },
  });

  await prisma.product.create({
    data: {
      ...products[3],
      ingredients: {
        connect: ingredients.slice(3, 6),
      },
    },
  });

  await prisma.product.create({
    data: {
      ...products[4],
      ingredients: {
        connect: ingredients.slice(4, 10),
      },
    },
  });
}

async function clear() {
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
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