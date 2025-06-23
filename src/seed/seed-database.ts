import { PrismaClient } from "../generated/prisma";

// Seed
import { initialData } from "./seed";

const prisma = new PrismaClient();

async function main() {
  await  prisma.orderAddress.deleteMany();
  await  prisma.orderItem.deleteMany();
  await  prisma.order.deleteMany();

  await  prisma.user.deleteMany();
  await  prisma.productImage.deleteMany();
  await  prisma.product.deleteMany();
  await  prisma.category.deleteMany();

  const { users, categories, products } = initialData;

  await prisma.user.createMany({
    data: users
  });

  const categoriesData = categories.map((name) => ({name}));

  await prisma.category.createMany({
    data: categoriesData
  });

  const categoriesDB = await prisma.category.findMany();

  const categoriesMap = categoriesDB.reduce((map, category) => {
    map[category.name.toLowerCase()] = category.id;
    return map;
  }, {} as Record<string, string>);

  products.forEach(async(product) => {
    const { type, images, ...rest } = product

    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        categoryId: categoriesMap[type]
      }
    })

    const imagesData = images.map(image => ({
      url: image,
      productId: dbProduct.id
    }));

    await prisma.productImage.createMany({
      data: imagesData
    });
  });
};

(() => {
  if (process.env.NODE_ENV === 'production') return;
  main();
})();
