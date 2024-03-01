/*
  Warnings:

  - You are about to drop the column `description` on the `notifications` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "notifications" DROP COLUMN "description",
ALTER COLUMN "url" DROP NOT NULL;
