import db from '../../../lib/db'
import * as dayjs from dayjs

import Regex from 'components/regex/regex'

import { v4 as uuidv4 } from 'uuid'

import bcrypt from 'bcrypt'
const saltRounds = 10

export default async function handler(req, res) {
  
  try {
    if (req.method === 'POST') {

      const {email, username, password} = req.body
    
      if(!password || password == null || !email || email == null || !username || username == null) {
        return res.status(400).json({ 
          status:'error', 
          message: "Please fill in the fields"
        }) 
      }
  
      if(Regex("password", password) === null) {
        return res.status(400).json({ 
          status:'error', 
          message: "Password doesnt meet the requirements"
        }) 
      }

      if(Regex("input_email", email.toLowerCase()) === null) {
        return res.status(400).json({ 
          status:'error', 
          message: "Not a valid email"
        }) 
      }
  
      function existingUser(email) {
        return db.oneOrNone('SELECT email FROM users WHERE email = ${email} LIMIT 1',{
          email 
        })
      }
  
      const hash = await bcrypt.hash(password, saltRounds)
  
      existingUser(email)
        .then( data => {
          if(data) {
            return res.status(400).json({
              status: 'error', 
              message: "User already exists"
            })
            
          } else {
  
            const uuid = uuidv4()
  
            const dateToday = dayjs().format("DD-MM-YYYY")
    
            db.none('INSERT INTO users(id, wallet_id, username, pass, created_at, email) VALUES(${id}, ${walletId}, ${username}, ${password}, ${created_at}, ${email})', {
              id: uuid,
              walletId: uuid,
              username: username,
              password: hash,
              created_at: dateToday,
              email: email,
            }).then( () => {

              db.none('INSERT INTO wallet(id, balance) VALUES(${id}, ${balance})', {
                id: uuid,
                balance: 0
              })

              return res.status(200).json({ 
                status: 'succes',
                message: "User created successfully"
              });

            }).catch(error => {
              console.log(error);
            })
  
            
          }
        })
        .catch( error => {
          console.log('No database available ' + error);
        })
  
    } else {
      return res.status(404)
    }
  }

  catch (error) {
    res.json(error)
    res.status(405).end()
  }


}