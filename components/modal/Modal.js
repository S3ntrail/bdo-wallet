import Popup from "reactjs-popup";
import {
  Delete_Button,
  Cancel_Button,
  Create_Button,
} from "components/button/button";
import Input from "components/form/input/input";
import Message from "components/popup/message";
import { DashboardContext } from "components/context/context";
import { useContext, useState, useEffect } from "react";

const Delete_Modal = (props) => {
  const { refetchDashboard } = useContext(DashboardContext);
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

    if (result) {
      refetchDashboard();
      close;
    }

    // TODO add in way to show user that it actually has been deleted.
  };

  return (
    <Popup
      trigger={<button> Delete </button>}
      modal
      nested
      position={"center center"}
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
              <Cancel_Button onClick={close} />
              <Delete_Button onClick={() => deleteTransaction()} />
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
};

const Edit_Modal = (props) => {
  const { refetchDashboard } = useContext(DashboardContext);
  const id = props.id;

  return (
    <Popup
      trigger={<button> Edit </button>}
      modal
      nested
      position={"center center"}
    >
      {(close) => (
        <div className="bg-gray-300 p-8 rounded items-center">
          <button className="text-black" onClick={close}>
            &times;
          </button>
          <div className="text-center p-3">
            <div>
              <h3 className="text-xl font-bold text-gray-600">Edit</h3>
            </div>
            <div className="mt-2 text-center space-x-2 flex justify-center">
              <Cancel_Button onClick={close} />
              <Delete_Button onClick={() => deleteTransaction()} />
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
};

const Add_Transaction = () => {
  const [loading, isLoading] = useState(null);
  const [error, setError] = useState(null);

  const createTransaction = async (event) => {
    event.preventDefault();
    isLoading(true);
    setError(null)

    const res = await fetch("/api/dashboard/transaction", {
      body: JSON.stringify({
        balance: event.target.newBalance.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (!res.ok) {
      setError({
        status: "error",
        message: "Something went terribly wrong",
      });
    }

    isLoading(false);
  };

  return (
    <Popup
      trigger={<button> Edit Balance </button>}
      modal
      nested
      position={"center center"}
    >
      {(close) => (
        <div className="bg-gray-300 p-8 rounded items-center">
          <button className="text-black" onClick={close}>
            &times;
          </button>
          <div className="text-center p-3">
            {error && <Message message={error} delay={5000} />}
            <form onSubmit={createTransaction}>
              <div>
                <h3 className="text-xl font-bold text-gray-600">
                  Add an transaction
                </h3>
                <Input
                  id="newBalance"
                  type="number"
                  placeholder="New Balance"
                />
              </div>
              <div className="mt-2 text-center space-x-2 flex justify-center">
                <Cancel_Button onClick={close} />
                <Create_Button type="submit" loading={loading} />
              </div>
            </form>
          </div>
        </div>
      )}
    </Popup>
  );
};

export { Delete_Modal, Edit_Modal, Add_Transaction };
