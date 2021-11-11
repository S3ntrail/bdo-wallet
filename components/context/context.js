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

  const { data: pieData, refetch: refetchpieData } = useQuery('pieData', () => 
    fetch('http://localhost:3000/api/dashboard/pie')
      .then( async (res) => {
        const parsed = await res.json()
        return parsed.data
      })
  )

  return (
    <DashboardContext.Provider
      value={{
        balance,
        pieData
      }}
    >

      {children}

    </DashboardContext.Provider>
  )
}

export {DashboardProvider, DashboardContext}