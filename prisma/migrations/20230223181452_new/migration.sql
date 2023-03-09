/*
  Warnings:

  - You are about to drop the column `clientId` on the `Appointment` table. All the data in the column will be lost.
  - The `when` column on the `Appointment` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Appointment" DROP COLUMN "clientId",
DROP COLUMN "when",
ADD COLUMN     "when" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
