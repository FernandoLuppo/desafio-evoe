/*
  Warnings:

  - Added the required column `color` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `color` VARCHAR(191) NOT NULL;
