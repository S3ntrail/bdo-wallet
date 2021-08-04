import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faChartLine,
  faCalculator,
  faGlobe
} from "@fortawesome/free-solid-svg-icons";

import Button from "components/button/button";

import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-screen relative h-screen">
      <div className="mb-16">
        <div className="pt-32 mb-16 font-black text-center">
          <h1>BDO & You</h1>
        </div>

        <div className="mb-16 font-black text-center">
          <h2>Your financial tracker for Black Desert Online</h2>
        </div>

        <div className="text-center">
          <Link href="#">
            <Button title="Start tracking" />
          </Link>
        </div>
      </div>

      <div className="bg-black bottom-0 w-full absolute flex justify-between text-center">

        <div className="w-1/4 flex flex-col justify-center py-8 border-r-2 border-white">
          <div className="py-4 mb-4">
            <FontAwesomeIcon
              icon={faWallet}
              className="text-white fa-5x m-2"
            >

            </FontAwesomeIcon>
          </div>
          <h3>Web based wallet</h3>
        </div>

        <div className="w-1/4 flex flex-col justify-center py-8 border-r-2 border-white">
          <div className="py-4 mb-4">
            <FontAwesomeIcon
              icon={faChartLine}
              className="text-white fa-5x m-2"
            >

            </FontAwesomeIcon>
          </div>
          <h3>See your growth</h3>
        </div>

        <div className="w-1/4 flex flex-col justify-center py-8 border-r-2 border-white">
          <div className="py-4 mb-4">
            <FontAwesomeIcon
              icon={faCalculator}
              className="text-white fa-5x m-2"
            >

            </FontAwesomeIcon>
          </div>
          <h3>Insight of your growth</h3>
        </div>

        <div className="w-1/4 flex flex-col justify-center py-8">
          <div className="py-4 mb-4">
            <FontAwesomeIcon
              icon={faGlobe}
              className="text-white fa-5x m-2"
            >

            </FontAwesomeIcon>
          </div>
          <h3>A community accros the globe</h3>
        </div>

      </div>
    </div>
  );
};

export default Hero;
