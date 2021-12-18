import { Popup } from "reactjs-popup";

import { Delete_Modal } from "components/modal/Modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const Menu = props => {
  return (
    <div>
      <Popup
        trigger={
          <button type="button" className="bg-gray-900">
            <FontAwesomeIcon icon={faEllipsisV} className="bg-gray-900" />
          </button>
        }
        nested
        closeOnDocumentClick
        position={['left bottom']}
        overlayStyle={{ position: "relative"}}
        contentStyle={{ backgroundColor: "white", borderRadius: "20px" }}
        arrow={false}
      >
        <div className="m-4">
          <p
            className="text-black text-lg bg-white cursor-pointer"
          >
            <Delete_Modal id={props.id}/>
          </p>
        </div>

        <div className="m-4">
          <p
            className="text-black text-lg bg-white cursor-pointer"
          >
            Edit
          </p>
        </div>
      </Popup>
    </div>
  );
};

export default Menu
