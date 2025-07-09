/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "StockPrice" (
    "id" SERIAL NOT NULL,
    "date" DATE NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "StockPrice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StockPrice_date_key" ON "StockPrice"("date");
