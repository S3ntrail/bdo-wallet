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
    fetch('/api/dashboard/balance')
      .then( async (res) => {
        const parsed = await res.json()

        return parsed.balance
      })
      .catch(err => {
        console.log("Context component error : " + err);
      })
  )

  const { data: chartData, refetch: refetchchartData } = useQuery('pieData', () => 
    fetch('/api/dashboard/chart')
      .then( async (res) => {
        const parsed = await res.json()

        return parsed
      })
      .catch(err => {
        console.log("Context component error : " + err);
      })
  )

  const { data: transactions, refetch: refetchTransaction } = useQuery('transactions', () => 
    fetch('/api/dashboard/transaction/tablerow')
      .then( async (res) => {
        const parsed = await res.json()

        return parsed
      })
      .catch(err => {
        console.log("Context component error : " + err);
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