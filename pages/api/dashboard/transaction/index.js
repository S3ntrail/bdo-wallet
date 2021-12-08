import { getSession } from 'next-auth/client'
import * as dayjs from dayjs

import db from '../../../../lib/db'

import { v4 as uuidv4 } from 'uuid'

export default async function handler(req, res) {

  try {

    if(req.method === 'POST') {

      const session = await getSession( {req} )

      if(!session) {
        return res.status(401)
      }

      const uuid = uuidv4()
      const id = session.user.id
      const walletid = session.user.wallet_id
      const balance = req.body.balance
      const profitOrLoss = req.body.profitOrLoss

      function retrieveBalance(id) {
        return db.one('SELECT balance FROM wallet WHERE id = ${id} LIMIT 1',{
          id: id
        })
      }
  
      const dateToday = dayjs().format("DD-MM-YYYY")

      const transaction = await retrieveBalance(id)
        .then( (data) => {
          const oldBalance = data.balance
          let total = 0

          if (profitOrLoss == 0) {
            if (oldBalance > balance) {
              return res.status(400).json({
                status:'error', 
                message: "Are you sure you made profit?"
              })
            } else {
              total = balance - oldBalance
            }
          } else {
            if (oldBalance < balance) {
              return res.status(400).json({
                status:'error', 
                message: "Are you sure you made Loss?"
              })
            } else {
              total = oldBalance - balance
            }
          }

          db.none('INSERT INTO transaction(id, wallet_id, date, amount, profitorloss, balance) VALUES(${id}, ${wallet_id}, ${date}, ${amount}, ${profitorloss}, ${balance})',{
            id: uuid,
            wallet_id: walletid,
            date: dateToday,
            amount: total,
            profitorloss: profitOrLoss,
            balance: balance
          })

          db.none('UPDATE wallet SET balance = ${balance} WHERE id = ${id}', {
            id: id,
            balance: balance
          })

          return res.status(200).json({ 
            status: 'succes',
            message: "Transaction created"
          });

        })
        .catch( error => {
          console.log('No database available' + error);
        })

    } else {
      return res.status(404)
    }

  }catch (error) {
    res.json(error)
    res.status(405).end()
  }
}