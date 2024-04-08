-- CreateTable
CREATE TABLE "Epikka" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "mensaje" TEXT NOT NULL,

    CONSTRAINT "Epikka_pkey" PRIMARY KEY ("id")
);
