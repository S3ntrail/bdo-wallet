import db from '../../../lib/db'

import { v4 as uuidv4 } from 'uuid'

import bcrypt from 'bcrypt'
const saltRounds = 10

export default async function handler(req, res) {
  
  try {
    if (req.method === 'POST') {
    
      const email = req.body.email.toLowerCase()
      const username = req.body.username
      const password = req.body.password
      const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
    
      if(!password || password == null || !email || email == null || !username || username == null) {
        return res.status(400).json({ 
          status:'error', 
          message: "Please fill in the fields"
        }) 
      }
  
      if(password.match(regex) === null || password.match(regex) === false) {
        return res.status(400).json({ 
          status:'error', 
          message: "Password doesnt meet the requirements"
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
  
            const date = new Date()
  
            const dateToday = date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear()
    
            db.none('INSERT INTO users(id, wallet_id, username, pass, created_at, email) VALUES(${id}, ${walletId}, ${username}, ${password}, ${created_at}, ${email})', {
              id: uuid,
              walletId: uuid,
              username: username,
              password: hash,
              created_at: dateToday,
              email: email,
            }).then( () => {

              db.none('INSERT INTO wallet(id, balance) VALUES(${id}, ${balance}'), {
                id: uuid,
                balance: 0
              }

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
          console.log('uwu Something went wong : ' + error);
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