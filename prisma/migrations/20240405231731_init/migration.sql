/*
  Warnings:

  - You are about to drop the `Epikka` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Message` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Epikka";

-- DropTable
DROP TABLE "Message";

-- CreateTable
CREATE TABLE "Form" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "profesion" TEXT NOT NULL,
    "empresa" TEXT NOT NULL,
    "pais" TEXT NOT NULL,

    CONSTRAINT "Form_pkey" PRIMARY KEY ("id")
);
