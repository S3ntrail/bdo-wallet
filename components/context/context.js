import { createContext, useState } from 'react'

import { useQuery } from 'react-query'

const DashboardContext = createContext()

const DashboardProvider = ({children}) => {
  
  const { data: balance, refetch: refetchBalance } = useQuery('balance', () => 
    fetch('http://localhost:3000/api/dashboard/balance')
      .then( async (res) => {
        const parsed = await res.json()

        return parsed.balance
      })
  )

  return (
    <DashboardContext.Provider
      value={{
        balance
      }}
    >

      {children}

    </DashboardContext.Provider>
  )
}

export {DashboardProvider, DashboardContext}