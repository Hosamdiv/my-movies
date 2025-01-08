import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider as ProviderChakra } from "./components/ui/provider.tsx";
import { Provider as ProviderRedux } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { store } from "./App/store.ts";

const queryClient = new QueryClient();


createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ProviderRedux store={store}>
      <ProviderChakra>
        <App />
      </ProviderChakra>
    </ProviderRedux>
  </QueryClientProvider>
);
