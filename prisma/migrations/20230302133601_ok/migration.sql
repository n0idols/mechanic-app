/*
  Warnings:

  - You are about to drop the column `appointmentId` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `appointmentId` on the `TimeSlot` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_appointmentId_fkey";

-- DropForeignKey
ALTER TABLE "TimeSlot" DROP CONSTRAINT "TimeSlot_appointmentId_fkey";

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "appointmentId";

-- AlterTable
ALTER TABLE "TimeSlot" DROP COLUMN "appointmentId";

-- CreateTable
CREATE TABLE "_AppointmentToTimeSlot" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_AppointmentToService" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AppointmentToTimeSlot_AB_unique" ON "_AppointmentToTimeSlot"("A", "B");

-- CreateIndex
CREATE INDEX "_AppointmentToTimeSlot_B_index" ON "_AppointmentToTimeSlot"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AppointmentToService_AB_unique" ON "_AppointmentToService"("A", "B");

-- CreateIndex
CREATE INDEX "_AppointmentToService_B_index" ON "_AppointmentToService"("B");

-- AddForeignKey
ALTER TABLE "_AppointmentToTimeSlot" ADD CONSTRAINT "_AppointmentToTimeSlot_A_fkey" FOREIGN KEY ("A") REFERENCES "Appointment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AppointmentToTimeSlot" ADD CONSTRAINT "_AppointmentToTimeSlot_B_fkey" FOREIGN KEY ("B") REFERENCES "TimeSlot"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AppointmentToService" ADD CONSTRAINT "_AppointmentToService_A_fkey" FOREIGN KEY ("A") REFERENCES "Appointment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AppointmentToService" ADD CONSTRAINT "_AppointmentToService_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;
