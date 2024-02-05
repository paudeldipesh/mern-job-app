import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AllRoutes from "./routes/AllRoutes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AllRoutes queryClient={queryClient} />
    </QueryClientProvider>
  );
}
