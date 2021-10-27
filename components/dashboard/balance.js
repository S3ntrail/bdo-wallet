import Card from 'components/card/card'

import { useState, useEffect } from 'react'
import React from 'react'

const Balance = () => {

  const [balance, setBalance] = useState([])

  useEffect( () => {
    fetch('http://localhost:3000/api/dashboard')
      .then( res => 
        res.json()
      )
    
      .then( data => setBalance(data.balance))
  },[])

  return(
    <div className="m-auto flex mb-6 mr-6 ml-8 mt-8 space-x-4">
      <Card 
        amount={balance}
        title="Silver"
        // icon="wallet"
        // color="bg-yellow-400"
      />
    </div>
  )

}

export default Balance