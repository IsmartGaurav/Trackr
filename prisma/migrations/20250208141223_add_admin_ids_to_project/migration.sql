/*
  Warnings:

  - You are about to drop the column `firstName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `_ProjectAdmins` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ProjectAdmins" DROP CONSTRAINT "_ProjectAdmins_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProjectAdmins" DROP CONSTRAINT "_ProjectAdmins_B_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "firstName",
DROP COLUMN "lastName";

-- DropTable
DROP TABLE "_ProjectAdmins";
