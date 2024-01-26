import { Link, Form, redirect } from "react-router-dom";
import { Logo, FormRow, SubmitBtn } from "../components";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registration successful");
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

export default function Register() {
  return (
    <Wrapper>
      <Form method="post" className="form">
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

        <SubmitBtn />

        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
}
