/*
  Warnings:

  - Added the required column `position` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `position` to the `ProductImage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "position" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ProductImage" ADD COLUMN     "position" INTEGER NOT NULL;
