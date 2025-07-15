import { categories, products, ingredients } from "./constants";
import { prisma } from "./prisma-client";
  
const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductItem = ({
  productId,
  pizzaType,
  size,
}: {
  productId: number;
  pizzaType?: 1 | 2;
  size?: 20 | 25 | 30 | 35;
}) => {
  return {
    productId,
    price: randomNumber(190, 600),
    pizzaType,
    size,
  } 
};

async function load() {
  await prisma.category.createMany({
    data: categories
  });

  await prisma.ingredient.createMany({
    data: ingredients
  });

  await prisma.product.createMany({
    data: products,
  });

  const pizza1 = await prisma.product.create({
    data: {
      name: 'Пепперони фреш',
      image:
        'https://media.dodostatic.net/image/r:584x584/11ee7d612fc7b7fca5be822752bee1e5.avif',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(0, 5),
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: 'Диабло',
      image:
        'https://media.dodostatic.net/image/r:584x584/11ee7d6149eb101d8727573088fa2eff.avif',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(5, 10),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: 'Мясная',
      image:
        'https://media.dodostatic.net/image/r:584x584/11ee7d6108e3a1c9952cd3a7f39a4d02.avif',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(10, 15),
      },
    },
  });

  const pizza4 = await prisma.product.create({
    data: {
      name: 'Цыпленок барбекю',
      image:
        'https://media.dodostatic.net/image/r:584x584/11ee7d6110059795842d40396bcf1e73.avif',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(7, 15),
      },
    },
  });

  const pizza5 = await prisma.product.create({
    data: {
      name: 'Пепперони',
      image:
        'https://media.dodostatic.net/image/r:584x584/11ee7d610a62d78598406363a9a8ad65.avif',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(2, 5),
      },
    },
  });
    

  await prisma.productItem.createMany({
    data: [
      // Пицца "Пепперони фреш"
      generateProductItem({ productId: pizza1.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza1.id, pizzaType: 1, size: 25 }),
      generateProductItem({ productId: pizza1.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza1.id, pizzaType: 1, size: 35 }),
      generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 20 }),
      generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 25 }),
      generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 35 }),

      // Пицца "Диабло"
      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 25 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 35 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 20 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 25 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 35 }),

      // Пицца "Чоризо фреш"
      generateProductItem({ productId: pizza3.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza3.id, pizzaType: 1, size: 25 }),
      generateProductItem({ productId: pizza3.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza3.id, pizzaType: 1, size: 35 }),
      generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 20 }),
      generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 25 }),
      generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 35 }),

      // Пицца "Цыпленок барбекю"
      generateProductItem({ productId: pizza4.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza4.id, pizzaType: 1, size: 25 }),
      generateProductItem({ productId: pizza4.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza4.id, pizzaType: 1, size: 35 }),
      generateProductItem({ productId: pizza4.id, pizzaType: 2, size: 20 }),
      generateProductItem({ productId: pizza4.id, pizzaType: 2, size: 25 }),
      generateProductItem({ productId: pizza4.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza4.id, pizzaType: 2, size: 35 }),

      // Пицца "Пепперони" 
      generateProductItem({ productId: pizza5.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza5.id, pizzaType: 1, size: 25 }),
      generateProductItem({ productId: pizza5.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza5.id, pizzaType: 1, size: 35 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 20 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 25 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 35 }),

      // Остальные продукты
      generateProductItem({ productId: 1 }),
      generateProductItem({ productId: 2 }),
      generateProductItem({ productId: 3 }),
      generateProductItem({ productId: 4 }),
      generateProductItem({ productId: 5 }),
      generateProductItem({ productId: 6 }),
      generateProductItem({ productId: 7 }),
      generateProductItem({ productId: 8 }),
      generateProductItem({ productId: 9 }),
      generateProductItem({ productId: 10 }),
      generateProductItem({ productId: 11 }),
      generateProductItem({ productId: 12 }),
      generateProductItem({ productId: 13 }),
      generateProductItem({ productId: 14 }),
      generateProductItem({ productId: 15 }),
      generateProductItem({ productId: 16 }),
      generateProductItem({ productId: 17 }),
      generateProductItem({ productId: 18 }),
      generateProductItem({ productId: 19 }),
      generateProductItem({ productId: 20 }),
      generateProductItem({ productId: 21 }),
      generateProductItem({ productId: 22 }),
      generateProductItem({ productId: 23 }),
      generateProductItem({ productId: 24 }),
      generateProductItem({ productId: 25 }),
      generateProductItem({ productId: 26 }),
      generateProductItem({ productId: 27 }),
      generateProductItem({ productId: 28 }),
      generateProductItem({ productId: 29 }),
      generateProductItem({ productId: 30 }),
      generateProductItem({ productId: 31 }),
      generateProductItem({ productId: 32 }),
      generateProductItem({ productId: 33 }),
      generateProductItem({ productId: 34 }),
      generateProductItem({ productId: 35 }),
      generateProductItem({ productId: 36 }),
    ],
  });
}

async function clear() {
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
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