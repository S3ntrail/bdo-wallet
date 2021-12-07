CREATE TABLE "users" (
  "id" uuid PRIMARY KEY NOT NULL,
  "wallet_id" uuid UNIQUE NOT NULL,
  "username" varchar(30) NOT NULL,
  "pass" varchar(255) NOT NULL,
  "created_at" date NOT NULL,
  "email" varchar(100) NOT NULL
);

CREATE TABLE "wallet" (
  "id" uuid PRIMARY KEY NOT NULL,
  "balance" bigserial NOT NULL
);

CREATE TABLE "transaction" (
  "id" uuid PRIMARY KEY NOT NULL,
  "wallet_id" uuid NOT NULL,
  "profitorloss" boolean NOT NULL,
  "date" date NOT NULL,
  "amount" bigserial NOT NULL
  "balance" bigserial NOT NULL
);

ALTER TABLE "wallet" ADD FOREIGN KEY ("id") REFERENCES "users" ("wallet_id");

ALTER TABLE "transaction" ADD FOREIGN KEY ("wallet_id") REFERENCES "wallet" ("id");
