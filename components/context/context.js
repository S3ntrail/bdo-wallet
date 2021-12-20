import { createContext } from 'react'

import { useQuery } from 'react-query'

const DashboardContext = createContext()

const DashboardProvider = ({children}) => {

  const refetchDashboard = () => {
    refetchBalance(),
    refetchchartData(),
    refetchTransaction()
  }
  
  const { data: balance, refetch: refetchBalance } = useQuery('balance', () => 
    fetch('http://localhost:3000/api/dashboard/balance')
      .then( async (res) => {
        const parsed = await res.json()

        return parsed.balance
      })
  )

  const { data: chartData, refetch: refetchchartData } = useQuery('pieData', () => 
    fetch('http://localhost:3000/api/dashboard/chart')
      .then( async (res) => {
        const parsed = await res.json()

        return parsed
      })
  )

  const { data: transactions, refetch: refetchTransaction } = useQuery('transactions', () => 
    fetch('http://localhost:3000/api/dashboard/transaction/tablerow')
      .then( async (res) => {
        const parsed = await res.json()

        return parsed
      })
  )

  return (
    <DashboardContext.Provider
      value={{
        balance,
        chartData,
        transactions,
        refetchDashboard
      }}
    >

      {children}

    </DashboardContext.Provider>
  )
}

export {DashboardProvider, DashboardContext}