/*
  Warnings:

  - You are about to drop the `Hey` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Option` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Setting` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_HeyToOption` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_HeyToSetting` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_HeyToOption" DROP CONSTRAINT "_HeyToOption_A_fkey";

-- DropForeignKey
ALTER TABLE "_HeyToOption" DROP CONSTRAINT "_HeyToOption_B_fkey";

-- DropForeignKey
ALTER TABLE "_HeyToSetting" DROP CONSTRAINT "_HeyToSetting_A_fkey";

-- DropForeignKey
ALTER TABLE "_HeyToSetting" DROP CONSTRAINT "_HeyToSetting_B_fkey";

-- DropTable
DROP TABLE "Hey";

-- DropTable
DROP TABLE "Option";

-- DropTable
DROP TABLE "Setting";

-- DropTable
DROP TABLE "_HeyToOption";

-- DropTable
DROP TABLE "_HeyToSetting";
