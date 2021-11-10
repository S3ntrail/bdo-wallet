import { getSession } from "next-auth/client";

import db from "../../../../lib/db";

export default async function handler(req, res) {

  try {
    if (req.method === 'GET') {

      const session = await getSession( {req} );

      if (!session) {
        return res.status(401)
      }

      const wallet_id = session.user.wallet_id;

      const transaction = await db.any('SELECT profitorloss, amount FROM transaction WHERE wallet_id = ${wallet_id}', {
        wallet_id
      })

      // Check if there is anything in variable
      if (transaction) {

        const filterLost = transaction.filter(index => index.profitorloss == false)

        const filterAmount = filterLost.map((index) => ({amount: index.amount}))

        const sumAll = filterAmount.map(index => index.amount).reduce((prev, curr) => prev + curr, 0)

        console.log(sumAll);

        return res.status(200).json(filterAmount)

      } else {
        return res.status(400)
      }

    } else {
      return res.status(404);
    }
  } catch (error) {
    res.json(error);
    res.status(405).end();
  }
}
