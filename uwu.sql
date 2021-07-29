CREATE TABLE "user" (
  "id" uuid PRIMARY KEY NOT NULL,
  "walletId" uuid UNIQUE NOT NULL,
  "username" character(50) NOT NULL,
  "pass" character(255) NOT NULL,
  "created_at" date NOT NULL,
  "mail" character(200) NOT NULL
);

CREATE TABLE "wallet" (
  "id" uuid PRIMARY KEY NOT NULL,
  "balance" bigserial NOT NULL
);

CREATE TABLE "transaction" (
  "id" int PRIMARY KEY NOT NULL,
  "categoryId" uuid NOT NULL,
  "walletId" uuid NOT NULL,
  "date" date NOT NULL,
  "amount" bigint NOT NULL
);

CREATE TABLE "category" (
  "id" uuid PRIMARY KEY NOT NULL,
  "name" character(40)
);

ALTER TABLE "wallet" ADD FOREIGN KEY ("id") REFERENCES "user" ("walletId");

ALTER TABLE "transaction" ADD FOREIGN KEY ("walletId") REFERENCES "wallet" ("id");

ALTER TABLE "transaction" ADD FOREIGN KEY ("categoryId") REFERENCES "category" ("id");
