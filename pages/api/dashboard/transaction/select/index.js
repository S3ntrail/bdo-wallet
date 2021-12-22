import db from "../../../../../lib/db";
import { getSession } from "next-auth/client";

export default async function(req,res) {
  try {
    if (req.method === "POST") {
      const session = await getSession({ req });

      if (!session) {
        return res.status(401);
      }

      const id  = req.body.id

      if (id == null && id == undefined) {
        return res.status(400).json({
          status: "error",
          message: "id is not defined",
        });
      }

      db.one('SELECT balance, amount, profitorloss FROM transaction where id = ${id}', {
        id
      }).then(data => {
        return res.status(200).json(data)
      }).catch(error => {
        return res.status(500).json({
          message: error,
        });
      })
    } else {
      return res.status(404);
    }
  } catch (error) {
    res.json(error);
    res.status(405).end();
  }
}