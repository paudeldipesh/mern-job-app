import { Link, Form, redirect, useNavigate } from "react-router-dom";
import { Logo, FormRow, SubmitBtn } from "../components";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const errors = { msg: "" };

  if (data.password.length < 3) {
    errors.msg = "password too short";
    return errors;
  }

  try {
    await customFetch.post("/auth/login", data);
    toast.success("login successful");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

export default function Login() {
  const navigate = useNavigate();

  const loginTestUser = async () => {
    const data = {
      email: "testuser@gmail.com",
      password: "testuser",
    };

    try {
      await customFetch.post("/auth/login", data);
      toast.success("Test user logged in...");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>login</h4>
        <FormRow type="email" name="email" />

        <FormRow type="password" name="password" />

        <SubmitBtn />

        <button type="button" className="btn btn-block" onClick={loginTestUser}>
          test user login
        </button>

        <p>
          Not a member yet?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
}
