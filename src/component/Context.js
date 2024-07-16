import React, { createContext, useState } from "react";

const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [dashClick, setDashClick] = useState(false);
  const [ticketClick, setTicketClick] = useState(false);

  return (
    <SidebarContext.Provider
      value={{ dashClick, setDashClick, ticketClick, setTicketClick }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarProvider };
