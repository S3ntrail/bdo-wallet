import db from "../../../../../lib/db";
import { getSession } from "next-auth/client";

export default async function (req, res) {
  try {
    if (req.method === "POST") {
      const session = await getSession({ req });

      if (!session) {
        return res.status(401);
      }

      const id = req.body.id;

      if (id == null && id == undefined) {
        return res.status(400).json({
          status: "error",
          message: "id is not defined",
        });
      }

      // TODO when deleting calculate the balance if the transaction has been deleted

      db.result(
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
