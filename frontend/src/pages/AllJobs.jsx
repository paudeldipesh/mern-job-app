import { useContext, createContext } from "react";
import { toast } from "react-toastify";
import { useLoaderData } from "react-router-dom";
import { JobsContainer, SearchContainer } from "../components";
import customFetch from "../utils/customFetch";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/jobs");
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllJobsContext = createContext();

export default function AllJobs() {
  const { data } = useLoaderData();

  return (
    <AllJobsContext.Provider value={{ data }}>
      <SearchContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  );
}

export const useAllJobsContext = () => {
  return useContext(AllJobsContext);
};
