import db from "../../../../../lib/db";
import { getSession } from "next-auth/client";

export default async function (req, res) {
  try {
    if (req.method === "POST") {
      const session = await getSession({ req });

      if (!session) {
        return res.status(401);
      }

      const wallet_id = session.user.wallet_id;
      const id = req.body.id;

      if (id == null && id == undefined) {
        return res.status(400).json({
          status: "error",
          message: "id is not defined",
        });
      }

      db.one('SELECT amount, profitorloss FROM transaction WHERE id = ${id}', {
        id
      }).then(data => {
        const amount = Number(data.amount)
        const net = data.profitorloss

        db.one('SELECT balance from wallet WHERE id = ${wallet_id}', {
          wallet_id: wallet_id
        }).then(data => {
          const balance = Number(data.balance)
          let result = 0

          if (net === true) {
            result = balance + amount
            db.none('UPDATE wallet SET balance = ${balance} WHERE id = ${wallet_id}', {
              wallet_id: wallet_id,
              balance: result
            })
          } else {
            result = balance - amount
            db.none('UPDATE wallet SET balance = ${balance} WHERE id = ${wallet_id}', {
              wallet_id: wallet_id,
              balance: result
            })
          }

        }).catch(error => {
          console.log(error);
        }) 

      }).catch(error => {
        console.log(error);
      })

      await db.result(
        "DELETE FROM transaction WHERE id = ${id}",
        {
          id,
        }
      ).then( () => {
        return res.status(200).json({
          status: "succes",
          message: "Transaction deleted",
        });
      }).catch(error => {
        return res.status(500).json({
          message: error,
        });
      });


    } else {
      return res.status(404);
    }
  } catch (error) {
    res.json(error);
    res.status(405).end();
  }
}
