import db from '../../../lib/db'

import { v4 as uuidv4 } from 'uuid'

import bcrypt from 'bcrypt'
const saltRounds = 10

/* 

  Todo :
  Proper error handling
  Redirect to certain pages
  Return the right HTTP status

  Additional note :

  Once completed the user must be directed to the login page with a message
  that his registration has been completed and that he can login from now on.

*/

export default async function handler(req, res) {

  const email = req.body.email
  const username = req.body.username
  const password = req.body.password

  if(!password || password == null || !email || email == null || !username || username == null) {
    return null
  }

  function existingUser(email) {
    return db.oneOrNone('SELECT email, password FROM users WHERE email = ${email} LIMIT 1',{
      email 
    })
  }

  const hash = await bcrypt.hash(password, saltRounds)
  
  existingUser(email)
    .then( data => {
      if(data) {
        console.log('User Exists ' + data);
        return null
      } else {
        console.log('User Does not exists');

        db.none('INSERT INTO users(userid, password, email) VALUES(${userid}, ${password}, ${email})', {
          userid: uuidv4(),
          password: hash,
          email: email
        }).then( () => {
          console.log('Insert Succesfull');
          
        }).catch(error => {
          console.log(error);
        })
      }
    })
    .catch( error => {
      console.log('uwu no database for you ' + error);
    })

}