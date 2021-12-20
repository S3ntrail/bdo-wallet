import { getSession } from "next-auth/client";

import db from "../../../../../lib/db";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const session = await getSession({ req });

      if (!session) {
        return res.status(401);
      }

      const wallet_id = session.user.wallet_id;

      const transaction = await db.any(
        "SELECT id, balance, date, profitorloss, amount FROM transaction WHERE wallet_id = ${wallet_id} ORDER BY date DESC LIMIT 30 ",
        {
          wallet_id,
        }
      );

      // Check if there is anything in variable
      if (transaction) {
        return res.status(200).json(transaction);
      } else {
        return res.status(400);
      }
    } else {
      return res.status(404);
    }
  } catch (error) {
    res.json(error);
    res.status(405).end();
  }
}
