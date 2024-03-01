-- CreateTable
CREATE TABLE "changelogs" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "version" TEXT NOT NULL,

    CONSTRAINT "changelogs_pkey" PRIMARY KEY ("id")
);
