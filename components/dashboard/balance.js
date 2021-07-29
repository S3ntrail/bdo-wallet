import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faWallet,
  faChartLine,
  faExchangeAlt
  } from '@fortawesome/free-solid-svg-icons'

const Balance = () => {

  // useEffect(() => {
  //   // Retrieve wallet and transactions from the datbase
  // })

  let silver = 5000

  let profit = 0 + 5000
  
  let transaction = 133

  let colorClass = ""
  let lossOrProfit = ""

  if (profit < 0) {
    colorClass = "bg-red-700 m-4 rounded-full"
    lossOrProfit = "Loss"
  } else {
    colorClass = "bg-green-800 m-4 rounded-full"
    lossOrProfit = "Profit"
  }

  return(
    <div className="m-auto flex mt-6 mb-6 mr-6 ml-8 space-x-4">

      <div className="flex-auto shadow-xl bg-gray-50 rounded">

        <div className="m-2">

          <div className="flex">
          {/* Icon */}
            <div className="m-4 bg-yellow-400 rounded-full">
              <FontAwesomeIcon
                icon={faWallet}
                className="
                  text-white fa-2x m-4
                  "
              >

              </FontAwesomeIcon>
              
            </div>

            <div className="flex flex-col justify-center">

              {/* Outcome */}
              <h3 className="text-black">
                {silver}
              </h3>

              {/* Name of the card */}
              <h3 className="text-black">
                Silver
              </h3>

            </div>

          </div>

        </div>

      </div>

      <div className="flex-auto shadow-xl bg-gray-50 rounded">

        <div className="m-2">

          <div className="flex">
          {/* Icon */}
            <div className={colorClass}>
              <FontAwesomeIcon
                icon={faChartLine}
                className="
                  text-white fa-2x m-4
                  "
              >

              </FontAwesomeIcon>
              
            </div>

            <div className="flex flex-col justify-center">

              {/* Outcome */}
              <h3 className="text-black">
                {profit}
              </h3>

              {/* Name of the card */}
              <h3 className="text-black">
                {lossOrProfit}
              </h3>

            </div>

          </div>

        </div>

      </div>

      <div className="flex-auto shadow-xl bg-gray-50 rounded">

        <div className="m-2">

          <div className="flex">
          {/* Icon */}
            <div className="m-4 bg-yellow-600 rounded-full">
              <FontAwesomeIcon
                icon={faExchangeAlt}
                className="
                  text-white fa-2x m-4
                  "
              >

              </FontAwesomeIcon>
              
            </div>

            <div className="flex flex-col justify-center">

              {/* Outcome */}
              <h3 className="text-black">
                {transaction}
              </h3>

              {/* Name of the card */}
              <h3 className="text-black">
                Transactions
              </h3>

            </div>

          </div>

        </div>

      </div>

    </div>
  )

}

export default Balance