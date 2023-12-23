import { Link } from "react-router-dom";
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";

export default function Register() {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="Dipesh" />
        <FormRow
          type="text"
          name="lastName"
          labelText="last name"
          defaultValue="Paudel"
        />
        <FormRow type="text" name="location" defaultValue="Nepal" />
        <FormRow
          type="email"
          name="email"
          defaultValue="dipeshpaudel@gmail.com"
        />
        <FormRow type="password" name="password" defaultValue="12345678" />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
}
