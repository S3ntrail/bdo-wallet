/*

  Todo : 
    Compare hash with input password
    Check if the user exist and if the password matches
    Proper error handling
    Think about ditching nextauth?
*/


import db from '../../../lib/db'

import bcrypt from 'bcrypt'
const saltRounds = 10

import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  providers : [
    Providers.Credentials({
      id: 'credentials',
      name: "Account",

      credentials: {
        email: {label: "Email", type: "email", placeholder: "youremail@email.com"},
        password: {label: "Password", type: "password", placeholder: "password123"}
      },

      async authorize(credentials, req) {

        const email = req.body.email
        const password = req.body.password

        console.log(credentials);

        if(!password || password == null || !email || email == null) {
          console.log('Error returned | FIELDS MISSING');
          return null
        }

        console.log('Passed Field check');

        function existingUser(email) {

          console.log('Checking existing user function');

          return db.oneOrNone('SELECT email, pass FROM users WHERE email = ${email} LIMIT 1',{
            email 
          })
        }

        console.log('Passed existing user');

        // const inputPassword = await bcrypt.hash(password, saltRounds)
        // const inputPassword = password
        // console.log(inputPassword);
        // console.log('Passed password hash');
      
        existingUser(email)
          .then( async (data) => {
            const hash = data.pass

            bcrypt.compare(password, hash, function(err, result) {
              if (err) throw err

              if(result) {
                console.log("succes");
                console.log(result);
              } else {
                console.log("failure");
              }
            })

          })
          .catch( error => {
            console.log('uwu no database for you' + error);
          })

        

        if (user) {
          console.log(user);
        } else {
          console.log('null');
        }
      }
    }),
  ],
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  }
}

export default (req,res) => NextAuth(req,res,options)

