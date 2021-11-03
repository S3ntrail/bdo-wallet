import { createContext, useState } from 'react'

const DashboardContext = createContext()

const DashboardProvider = ({children}) => {
  const [balance, setBalance] = useState([])

  const refreshBalance = async () => {
    try {
      const res = await fetch(process.env.BASE_URL + '/api/dashboard/balance')
      const result = res.json()

      console.log(result);
      setBalance(balance)
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <DashboardContext.Provider
      value={{
        refreshBalance,
      }}
    >

      {children}

    </DashboardContext.Provider>
  )
}

export {DashboardProvider, DashboardContext}