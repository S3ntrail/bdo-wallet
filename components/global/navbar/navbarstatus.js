import { signIn, signOut, useSession } from "next-auth/client";
import { Popup } from "reactjs-popup";

import SignInButton from "components/button/Login/login";
import RegisterButton from "components/button/Register/register";
import ModalTransaction from "components/modal/modalTransaction";

import { useContext } from "react";
import { DashboardContext } from "components/context/context";

import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarStatus = () => {
  const [session, loading] = useSession();
  const { balance } = useContext(DashboardContext);

  if (session) {
    return (
      <div className="flex">
        <div className="mr-8 border-b-2 border-white rounded">
          <ModalTransaction />
        </div>

        <div className="mr-8 border-b-2 border-white rounded p-1">
          <h2>
            <FontAwesomeIcon icon={faWallet} />
            {balance}
          </h2>
        </div>

        <div>
          <Popup
            trigger={
              <button type="button">
                <h2>Account</h2>
              </button>
            }
            closeOnDocumentClick
            keepTooltipInside={true}
            overlayStyle={{ position: "relative" }}
            contentStyle={{ backgroundColor: "white", borderRadius: "20px" }}
            arrow={true}
          >
            <div className="m-4">
              <p
                className="text-black text-lg"
              >
                Signed in as {session.user.name}
              </p>
            </div>

            <div className="m-4">
              <p
                onClick={() => signOut()}
                className="transition duration-500 ease-in-out text-black text-lg cursor-pointer"
              >
                Logout
              </p>
            </div>
          </Popup>
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <div className="mr-6">
        <a onClick={() => signIn()} className="cursor-pointer m-2">
          <SignInButton title="Login" />
        </a>
      </div>

      <div>
        <a href="/register" className="cursor-pointer m-2">
          <RegisterButton title="Register" />
        </a>
      </div>
    </div>
  );
};

export default NavbarStatus;
