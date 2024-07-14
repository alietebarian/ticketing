import React, { useState } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { LuTicket } from "react-icons/lu";

export default function SIdeBar() {
  const [dashClick, setDashClick] = useState(false);
  const [ticketClick, setTicketClick] = useState(false);

  return (
    <div className="w-[15%] h-[100vh] bg-white">
      <h1 className="text-2xl ml-8 mt-5">Ticketing system</h1>
      <table className="min-w-full bg-white">
        <tr>
          <div className="flex flex-col ">
            <th
              className={`text-left mt-10 ml-5  align-middle flex p-2 rounded-md ${
                dashClick && "bg-slate-200"
              }`}
              onClick={() => setDashClick(!dashClick)}
            >
              <span className="font-normal text-2xl mr-2 mt-1">
                <LuLayoutDashboard />
              </span>
              <span className="font-normal text-2xl">Dashboards</span>
            </th>
            {dashClick && (
              <td
                className={`ml-10 mt-3 flex p-2 rounded-md ${
                  !ticketClick && "bg-slate-100"
                }`}
                onClick={() => setTicketClick(!ticketClick)}
              >
                <span className="font-normal text-2xl mr-2 mt-1">
                  <LuTicket />
                </span>
                <span className="ml-2 font-normal text-2xl">Tickets</span>
              </td>
            )}
          </div>
        </tr>
      </table>
    </div>
  );
}
