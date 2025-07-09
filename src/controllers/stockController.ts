import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getStockPrices = async (req: Request, res: Response) => {
  try {
    const stockPrices = await prisma.stockPrice.findMany({
      orderBy: {
        date: 'asc',
      },
    });
    res.json(stockPrices);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch stock prices' });
  }
};
