import Popup from "reactjs-popup";
import Transaction from "components/form/transaction";

const ModalTransaction = () => {
  return (
    <Popup trigger={<button> Edit balance </button>} modal nested>
      {(close) => (
        <div className="bg-gray-900 p-8 rounded">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div>
            <Transaction />
          </div>
        </div>
      )}
    </Popup>
  );
};

export default ModalTransaction;
