import Popup from "reactjs-popup";
import { Delete_Button, Cancel_Button } from "components/button/button";
import { DashboardContext } from 'components/context/context'
import { useContext } from 'react'

const Delete_Modal = (props) => {

  const {refetchBalance, refetchchartData} = useContext(DashboardContext)
  const id = props.id;

  const deleteTransaction = async () => {
    const res = await fetch("/api/dashboard/transaction/delete", {
      body: JSON.stringify({
        id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    
    refetchBalance()
    refetchchartData()

    // TODO add in way to show user that it actually has been deleted.
  };

  return (
    <Popup
      trigger={<button> Delete </button>}
      modal
      nested
      position={"center center"}
      closeOnDocumentClick
    >
      {(close) => (
        <div className="bg-gray-300 p-8 rounded items-center">
          <button className="text-black" onClick={close}>
            &times;
          </button>
          <div className="text-center p-3">
            <div>
              <h3 className="text-xl font-bold text-gray-600">Are you sure?</h3>
              <p className="text-sm text-gray-500 py-2">
                Do you really want to delete this transaction? This process
                cannot be undone.
              </p>
            </div>
            <div className="mt-2 text-center space-x-2 flex justify-center">
              <Cancel_Button onClick={close}/>
              <Delete_Button onClick={ () => deleteTransaction()} />
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
};

export { Delete_Modal };
