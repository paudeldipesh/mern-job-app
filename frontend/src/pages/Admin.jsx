import { FaSuitcaseRolling, FaCalendarCheck } from "react-icons/fa";
import { useLoaderData, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { StatsItem } from "../components";
import customFetch from "../utils/customFetch";
import Wrapper from "../assets/wrappers/StatsContainer";

export const loader = async () => {
  try {
    const response = await customFetch.get("/users/admin/app-stats");
    return response.data;
  } catch (error) {
    toast.error("Only admin can access");
    return redirect("/dashboard");
  }
};

export default function Admin() {
  const { users, jobs } = useLoaderData();

  return (
    <Wrapper>
      <StatsItem
        title="current users"
        count={users}
        color="#e9b949"
        bcg="#fcefc7"
        icon={<FaSuitcaseRolling />}
      />
      <StatsItem
        title="total jobs"
        count={jobs}
        color="#647acb"
        bcg="#e0e8f9"
        icon={<FaCalendarCheck />}
      />
    </Wrapper>
  );
}
