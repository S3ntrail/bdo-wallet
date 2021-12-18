import {useState, useEffect} from 'react'

import { DashboardContext } from 'components/context/context'
import { useContext } from 'react'

import { Button } from 'components/button/button'
import Message from 'components/popup/message'

import Input from 'components/form/input/input'
import Label from 'components/form/label/label'
import Select from 'components/form/select/select'

const Transaction = () => {

  const [result, setResult] = useState();
  const {refetchBalance, refetchchartData} = useContext(DashboardContext)

  const createTransaction = async event => {

    event.preventDefault()

    const balance = event.target.newBalance.value
    const profitOrLoss = event.target.profitorloss.value

    if (!balance || balance == null || !profitOrLoss || profitOrLoss == null) {
      setResult({ 
        status:'error', 
        message: "Please fill in the fields"
      })
    }

    const res = await fetch('/api/dashboard/transaction', {
      body: JSON.stringify({
        balance: balance,
        profitOrLoss: profitOrLoss,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const result = await res.json()

    if (result) {
      refetchBalance()
      refetchchartData()
    }

    setResult(result)
  }

  useEffect(() => {
    if (result) {
      const timer = setTimeout(() => {
        setResult()
      }, 5000)
  
      return () => {
        clearTimeout(timer)
      }
    }
  }, [result])

  return (
    <div className="justify-center">

      <div className="flex flex-wrap items-center m-8 mt-4 mb-20 p-10 bg-gray-850 rounded-xl">

        <div>

          <div>
            {result && 
              <Message 
                message={result}
                delay="5000"
              />
            }
          </div>

          <form onSubmit={createTransaction}>

            <div className="flex flex-col mb-8">
              <Label 
                for="balance"
                title="balance"
              />
              <Input 
                id="newBalance"
                type="number"
                placeholder="new balance"
              />
            </div>

            <div className="flex flex-col mb-8">
              <Label 
                for="profitOrLoss"
                title="Profit or Loss"
              />
              <Select 
                id="profitorloss"
                items={[
                  "Profit",
                  "Loss"
                ]}
              />
            </div>

            {/* <div className="flex flex-col mb-8">
              <Label 
                for="category"
                title="category"
              />
              <Select 
                id="category"
                items={[
                  "Test1",
                  "Test2",
                  "Test3",
                  "Test4",
                ]}
              />
            </div> */}

            <div className="mt-8">
              <hr></hr>
            </div>

            <button type="submit" className="mt-8">
              <Button title="Create" />
            </button>

          </form>

        </div>
        
      </div>
    </div>
  )


}

export default Transaction