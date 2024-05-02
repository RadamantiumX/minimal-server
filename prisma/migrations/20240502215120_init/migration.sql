-- CreateTable
CREATE TABLE "Informes" (
    "id" SERIAL NOT NULL,
    "latitud" TEXT NOT NULL,
    "longitud" TEXT NOT NULL,
    "label_1" TEXT NOT NULL,
    "conf_1" TEXT NOT NULL,
    "label_2" TEXT NOT NULL,
    "conf_2" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Informes_pkey" PRIMARY KEY ("id")
);
