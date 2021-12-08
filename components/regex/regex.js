const Regex = (type, input) => {

  console.log(type, input);

  let status = '' // This will be returned to the backend component
  let regex = '' // This will be used for the switch case to put in the regex

  if (type) {
    switch(type) {
  
      case "password":
        // Password must contain 1 uppercase, 1 number and 1 special symbol
        regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
        break
      
      case "input_numbers":
        // Input must only contain numbers
        regex = /[^a-z ]\ *([.0-9])*\d/g
        break

      case "input_email":
        // RFC2822 Email Validation. You need to put a valid email and the way this regex checks it if it contains a @ and a . with a registry domain (.com, .net, .org, etc,)
        regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
        break
    }

    if(input.match(regex)) {
      status = "success"
    } else {
      status = null
    }


  } else {
    status = null
  }

  return status
}

export default Regex
