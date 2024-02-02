-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Link" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL DEFAULT 'Untitled',
    "category_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "url_link" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Link_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Link" ("category_id", "created_at", "id", "product_id", "url_link", "user_id") SELECT "category_id", "created_at", "id", "product_id", "url_link", "user_id" FROM "Link";
DROP TABLE "Link";
ALTER TABLE "new_Link" RENAME TO "Link";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
