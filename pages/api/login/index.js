import db from '../../../lib/db'

import bcrypt from 'bcrypt'
const saltRounds = 10

export default async function handler(req, res) {
  try {
      const email = req.body.email.toLowerCase()
      const password = req.body.password

      if(!password || password == null || !email || email == null) {
        return res.status(400).json({ 
          status:'error', 
          message: "Please fill in the fields"
        }) 
      }

      function existingUser(email) {
        return db.oneOrNone('SELECT email, pass, id, wallet_id, username FROM users WHERE email = ${email} LIMIT 1',{
          email 
        })
      }

      const user = await existingUser(email)
        .then( async (data) => {
          const hash = data.pass

          bcrypt.compare(password, hash, function(err, result) {
            if (err) throw err

            if (!result) {
              return res.status(400).json({
                status: 'error', 
                message: "User doesnt match the password/email"
              })
            }

          })

          const user = {
            id: data.id,
            wallet_id: data.wallet_id,
            username: data.username,
          }

          return user

        })
        .catch( error => {
          console.log('No database available ' + error);
        })

      if (user) {
        req.session.set("user", {
          user
        })
        await req.session.save()
        return res.status(200).json({
          status: 'success'
        })
      } else {
        return res.status(400).json({
          status: 'error', 
          message: "Something went internally wrong. Contact the administrator"
        })
      }
    }

  catch (error) {
    res.json(error)
    res.status(405).end()
  }
}


  