/*
  Warnings:

  - You are about to drop the `_AppointmentToService` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AppointmentToTimeSlot` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_AppointmentToService" DROP CONSTRAINT "_AppointmentToService_A_fkey";

-- DropForeignKey
ALTER TABLE "_AppointmentToService" DROP CONSTRAINT "_AppointmentToService_B_fkey";

-- DropForeignKey
ALTER TABLE "_AppointmentToTimeSlot" DROP CONSTRAINT "_AppointmentToTimeSlot_A_fkey";

-- DropForeignKey
ALTER TABLE "_AppointmentToTimeSlot" DROP CONSTRAINT "_AppointmentToTimeSlot_B_fkey";

-- AlterTable
ALTER TABLE "Appointment" ADD COLUMN     "serviceId" INTEGER,
ADD COLUMN     "timeSlotId" INTEGER;

-- DropTable
DROP TABLE "_AppointmentToService";

-- DropTable
DROP TABLE "_AppointmentToTimeSlot";

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_timeSlotId_fkey" FOREIGN KEY ("timeSlotId") REFERENCES "TimeSlot"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE SET NULL ON UPDATE CASCADE;
