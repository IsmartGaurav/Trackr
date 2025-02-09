-- CreateTable
CREATE TABLE "_ProjectAdmins" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ProjectAdmins_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ProjectAdmins_B_index" ON "_ProjectAdmins"("B");

-- AddForeignKey
ALTER TABLE "_ProjectAdmins" ADD CONSTRAINT "_ProjectAdmins_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectAdmins" ADD CONSTRAINT "_ProjectAdmins_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
