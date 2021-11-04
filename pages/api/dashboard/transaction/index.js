import { getSession } from 'next-auth/client'

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

      const date = new Date()
  
      const dateToday = date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear()

      const transaction = await retrieveBalance(id)
        .then( (data) => {
          const oldBalance = data.balance

          if (profitOrLoss == 0) {
            if (oldBalance > balance) {
              return res.status(400).json({ 
                status: 'error',
                message: "Are you sure you made profit?"
              });
            } else {
              db.none('INSERT INTO transaction(id, wallet_id, date, amount, profitorloss) VALUES(${id}, ${wallet_id}, ${date}, ${amount}, ${profitorloss})',{
                id: uuid,
                wallet_id: walletid,
                date: dateToday,
                amount: balance - oldBalance,
                profitorloss: true
              })
            }
          } else {
            if (oldBalance < balance) {
              return res.status(406).json({ 
                status: 'error',
                message: "Are you sure you made loss?"
              });
            } else {
              db.none('INSERT INTO transaction(id, wallet_id, date, amount, profitorloss) VALUES(${id}, ${wallet_id}, ${date}, ${amount}, ${profitorloss})',{
                id: uuid,
                wallet_id: walletid,
                date: dateToday,
                amount: oldBalance - balance,
                profitorloss: false
              })
            }
          }

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
          console.log('uwu no database for you ' + error);
        })

    } else {
      return res.status(404)
    }

  }catch (error) {
    res.json(error)
    res.status(405).end()
  }
}