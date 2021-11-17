import Card from 'components/card/card'

import { useContext } from 'react'

import { DashboardContext } from 'components/context/context'

const Balance = () => {

  const { balance } = useContext(DashboardContext)

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