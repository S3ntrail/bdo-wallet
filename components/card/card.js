import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Card = (props) => {

  const iconStyle = `m-4 rounded-full ${props.color}`;
 
  return (
    <div className="flex-auto shadow-xl bg-gray-50 rounded border-gray-500">
      <div className="m-2">
        <div className="flex">
          {/* Icon */}
          <div className={iconStyle}>
            <FontAwesomeIcon
              icon={['fas', props.icon]}
              className="text-white fa-2x m-4"
            />
          </div>

          <div className="flex flex-col justify-center ml-6">
            {/* Outcome */}
            <h3 className="text-black">{props.amount}</h3>

            {/* Name of the card */}
            <h3 className="text-black">{props.title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card
