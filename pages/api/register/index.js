const bycrypt = require('bcrypt')
const saltRounds = 10

export default function handler(req, res) {
  let user = req.body.username
  let email = req.body.email
  let password = req.body.password

  bycrypt.genSalt(saltRounds, function(err, salt){
    bycrypt.hash(password, salt, function(err, hash){
      console.log(hash);
    })
  })

  console.log(email);
  console.log(user);
}