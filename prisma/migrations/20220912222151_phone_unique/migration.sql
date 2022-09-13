/*
  Warnings:

  - A unique constraint covering the columns `[phone]` on the table `pessoaTelefone` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "pessoaTelefone_phone_key" ON "pessoaTelefone"("phone");
