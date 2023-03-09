-- DropIndex
DROP INDEX "TimeSlot_id_key";

-- AlterTable
CREATE SEQUENCE timeslot_id_seq;
ALTER TABLE "TimeSlot" ALTER COLUMN "id" SET DEFAULT nextval('timeslot_id_seq'),
ADD CONSTRAINT "TimeSlot_pkey" PRIMARY KEY ("id");
ALTER SEQUENCE timeslot_id_seq OWNED BY "TimeSlot"."id";
