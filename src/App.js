import React from "react";
import MainPage from "./MainPage";
import SIdeBar from "./component/SIdeBar";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App() {

  const queryClient = new QueryClient();
  return (
    <div className="p-1.5 flex">
      <QueryClientProvider client={queryClient}>
        <SIdeBar />
        <MainPage />
      </QueryClientProvider>
    </div>
  );
}
