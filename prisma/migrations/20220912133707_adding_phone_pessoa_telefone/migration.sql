/*
  Warnings:

  - Added the required column `phone` to the `pessoaTelefone` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pessoaTelefone" ADD COLUMN     "phone" TEXT NOT NULL;
