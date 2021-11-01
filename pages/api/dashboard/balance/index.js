import { getSession } from 'next-auth/client'

import db from '../../../../lib/db'

export default async function handler(req, res) {

  try {

    if(req.method === 'GET') {

      const session = await getSession( {req} )

      if(!session) {
        return res.status(401)
      }

      // Warning state that this doesnt exist.
      // But it does. Long live next-auth library
      const id = session.user.wallet_id

      function retrieveBalance(id) {
        return db.oneOrNone('SELECT balance FROM wallet WHERE id = ${id} LIMIT 1',{
          id 
        })
      }

      const balance = await retrieveBalance(id)
        .then( (data) => {
          return data
        })
        .catch( error => {
          console.log('uwu no database for you ' + error);
        })

        if (balance) {
          return res.status(200).send(balance)
        } else {
          console.log('nothing');
        }

    } else {
      return res.status(404)
    }

  }catch (error) {
    res.json(error)
    res.status(405).end()
  }
}