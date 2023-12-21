import { Link } from "react-router-dom";
import { Logo } from "../components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";

export default function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Jobify is a full-stack MERN application designed to store job
            applications, aimed at revolutionizing the way you manage your job
            applications
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} className="img main-img" alt="hero icon" />
      </div>
    </Wrapper>
  );
}
