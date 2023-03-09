/*
  Warnings:

  - You are about to drop the column `when` on the `Appointment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Appointment" DROP COLUMN "when",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "TimeSlot" (
    "id" INTEGER NOT NULL,
    "slot" TEXT NOT NULL,
    "appointmentId" INTEGER
);

-- CreateIndex
CREATE UNIQUE INDEX "TimeSlot_id_key" ON "TimeSlot"("id");

-- AddForeignKey
ALTER TABLE "TimeSlot" ADD CONSTRAINT "TimeSlot_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "Appointment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
