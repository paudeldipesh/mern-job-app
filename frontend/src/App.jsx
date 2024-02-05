import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
