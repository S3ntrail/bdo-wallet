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

        // profitorloss : true = loss / false = profit

        // Calculate all loss
        const filterLost = transaction.filter(index => index.profitorloss == true)
        const filterAmountLost = filterLost.map((index) => ({amount: index.amount}))
        const sumAllLost = filterAmountLost.map(index => index.amount).reduce((prev, curr) => prev + curr)

        // Calculate all loss
        const filterProfit = transaction.filter(index => index.profitorloss == false)
        const filterAmountProfit = filterProfit.map((index) => ({amount: index.amount}))
        const sumAllProfit = filterAmountProfit.map(index => index.amount).reduce((prev, curr) => prev + curr)

        const data = [
          sumAllProfit,
          sumAllLost
        ]

        return res.status(200).json({data})

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
