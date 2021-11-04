import { useEffect, useState } from "react";

const Message = (props) => {
  const [visible, setVisible] = useState(true);

  const delay = props.delay;
  const message = props.message.message;
  let status = props.message.status;

  switch (status) {
    case "error":
      status = "bg-red-500 rounded-lg";
      break;
    case "succes":
      status = "bg-green-500 rounded-lg";
      break;
  }

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, delay);
  }, [delay]);

  if (visible) {
    return (
      <div>
        <div className={status}>
          <div className="text-center p-2 mb-4">
            <div className="text-black">
              <p className="font-medium">{message}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div />
  )
};

export default Message;
