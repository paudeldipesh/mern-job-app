import { useQuery } from "@tanstack/react-query";
import { ChartsContainer, StatsContainer } from "../components";
import customFetch from "../utils/customFetch";

const statsQuery = {
  queryKey: ["stats"],
  queryFn: async () => {
    const response = await customFetch.get("/jobs/stats");
    return response.data;
  },
};

export const loader = (queryClient) => async () => {
  return await queryClient.ensureQueryData(statsQuery);
};

export default function Stats() {
  const { data } = useQuery(statsQuery);

  const { defaultStats, monthlyApplications } = data;

  return (
    <>
      <StatsContainer defaultStats={defaultStats} />
      {monthlyApplications?.length > 1 && (
        <ChartsContainer data={monthlyApplications} />
      )}
    </>
  );
}
