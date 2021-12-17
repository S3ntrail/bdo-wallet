import { Popup } from "reactjs-popup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  return (
    <div>
      <Popup
        trigger={
          <button type="button" className="bg-gray-900">
            <FontAwesomeIcon icon={faEllipsisV} className="bg-gray-900" />
          </button>
        }
        closeOnDocumentClick
        position={['left bottom']}
        keepTooltipInside={true}
        overlayStyle={{ position: "relative"}}
        contentStyle={{ backgroundColor: "white", borderRadius: "20px" }}
        arrow={false}
      >
        <div className="m-4">
          <p
            className="text-black text-lg bg-white cursor-pointer"
          >
            Delete
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
