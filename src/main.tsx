import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "./components/ui/provider.tsx";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <Provider>
      <App />
    </Provider>
  </QueryClientProvider>
);
