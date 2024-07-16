import React from "react";
import MainPage from "./MainPage";
import SIdeBar from "./component/SIdeBar";
import { QueryClient, QueryClientProvider } from "react-query";
import { SidebarProvider } from "./component/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddNewTicket from "./component/AddNewTicket";
import HomePage from "./component/HomePage";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/newticket" element={<AddNewTicket/>} />
        
      </Routes>
    </BrowserRouter>
          </>
  );
}
