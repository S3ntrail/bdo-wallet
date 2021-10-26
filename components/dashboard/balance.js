import Card from 'components/card/card'

const Balance = () => {

  // useEffect(() => {
  //   // Retrieve wallet and transactions from the datbase
  // })

  return(
    <div className="m-auto flex mb-6 mr-6 ml-8 space-x-4 pt-16">
      <Card 
        amount="5000"
        title="Balance"
        icon="wallet"
        color="bg-yellow-400"
      />

      <Card 
        amount="5000"
        title="Transitions"
        icon="exchange-alt"
        color="bg-green-600"
      />
    </div>
  )

}

export default Balance