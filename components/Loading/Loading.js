import ReactLoading from "react-loading";

const Loading = ({ type }) => {
  return (
    <ReactLoading
      type={type}
      className="absolute"
      height={"100%"}
      width={"100%"}
    />
  );
};

export default Loading;
