import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import notFound from "../assets/images/notFound.svg";

export default function Error() {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={notFound} alt="not found icon" />
          <h3>Page Not Found</h3>
          <p>The page you are looking for is not found.</p>
          <Link to="/dashboard">Back Home</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h3>Something Went Wrong</h3>
    </Wrapper>
  );
}
