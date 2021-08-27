const bycrypt = require('bcrypt')
const saltRounds = 10

export default function handler(req, res) {
  let user = req.body.username
  let password = req.body.password

  console.log(user);

  bycrypt.genSalt(saltRounds, function(err, salt){
    bycrypt.hash(password, salt, function(err, hash){
      console.log(hash);
    })
  })

  if(!req) {
    console.log("Error is niet goed gegaan");
    return res.status(400).json({ valid: false})
  } else {
    return res.status(200).json({ valid: true })
    return true;
  }
}