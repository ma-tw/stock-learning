import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');
  const filePath = path.join(__dirname, 'mockStockPrices.json');
  const mockData: { date: string; price: number }[] = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  for (const stock of mockData) {
    const result = await prisma.stockPrice.upsert({
      where: { date: new Date(stock.date) },
      update: { price: stock.price },
      create: {
        date: new Date(stock.date),
        price: stock.price,
      },
    });
    console.log(`Created/updated stock price for date: ${result.date.toISOString().slice(0,10)}`);
  }
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
