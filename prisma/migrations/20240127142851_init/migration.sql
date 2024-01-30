-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT,
    "email" TEXT,
    "phone_number" TEXT,
    "password" TEXT NOT NULL,
    "balance" INTEGER NOT NULL DEFAULT 0,
    "referral_link" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_User" ("balance", "created_at", "email", "id", "password", "phone_number", "referral_link", "username") SELECT "balance", "created_at", "email", "id", "password", "phone_number", "referral_link", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_phone_number_key" ON "User"("phone_number");
CREATE UNIQUE INDEX "User_referral_link_key" ON "User"("referral_link");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
