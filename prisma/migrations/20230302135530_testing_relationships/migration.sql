-- CreateTable
CREATE TABLE "Hey" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Hey_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Option" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Option_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Setting" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Setting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_HeyToOption" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_HeyToSetting" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_HeyToOption_AB_unique" ON "_HeyToOption"("A", "B");

-- CreateIndex
CREATE INDEX "_HeyToOption_B_index" ON "_HeyToOption"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_HeyToSetting_AB_unique" ON "_HeyToSetting"("A", "B");

-- CreateIndex
CREATE INDEX "_HeyToSetting_B_index" ON "_HeyToSetting"("B");

-- AddForeignKey
ALTER TABLE "_HeyToOption" ADD CONSTRAINT "_HeyToOption_A_fkey" FOREIGN KEY ("A") REFERENCES "Hey"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HeyToOption" ADD CONSTRAINT "_HeyToOption_B_fkey" FOREIGN KEY ("B") REFERENCES "Option"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HeyToSetting" ADD CONSTRAINT "_HeyToSetting_A_fkey" FOREIGN KEY ("A") REFERENCES "Hey"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HeyToSetting" ADD CONSTRAINT "_HeyToSetting_B_fkey" FOREIGN KEY ("B") REFERENCES "Setting"("id") ON DELETE CASCADE ON UPDATE CASCADE;
