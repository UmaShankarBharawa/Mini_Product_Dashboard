import "./ErrorState.css";

const Error = ({ error }) => {
  return (
    <div className="error-message" >
      &#9888; {error || "Something went wrong. Please try again!"}
    </div>
  );
};

export default Error;
