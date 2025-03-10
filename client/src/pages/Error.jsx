import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="" />
          <h3>Page Not Found</h3>
          <Link to="/dashboard">Back to Home</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h3>Nope...</h3>
      <Link to="/">Go back to Home</Link>
    </Wrapper>
  );
};

export default Error;
