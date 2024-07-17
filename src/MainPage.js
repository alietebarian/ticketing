import React, { useContext, useState } from "react";
import Header from "./component/Header";
import { CiSearch } from "react-icons/ci";
import { useForm } from "react-hook-form";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { SidebarContext } from "./component/Context";
import { Link } from "react-router-dom";


const fetchUser = async (page = 1, pageSize = 10) => {
  const { data } = await axios.get(
    `https://gist.githubusercontent.com/alietebarian/d4c7cccf35687d221b62f67466bc9401/raw/b578ac170cf94b66f9f72a21eb171048fda782b8/gistfile1.txt?page=${page}&limit=${pageSize}`
  );
  return data;
};

export default function MainPage() {
  const [page, setPage] = useState(1);
  const pageSize = 10; // تعداد آیتم‌های هر صفحه
  const { register, handleSubmit, watch } = useForm();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["userData", page],
    queryFn: () => fetchUser(page, pageSize),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const searchInput = watch("search", "");

  let filteredData = data;
  if (filteredData) {
    filteredData = filteredData.filter(
      (item) =>
        item.name.toLowerCase().startsWith(searchInput.toLowerCase()) ||
        item.title.toLowerCase().startsWith(searchInput.toLowerCase()) ||
        item.status.toLowerCase().startsWith(searchInput.toLowerCase()) ||
        item.number.toString().startsWith(searchInput.toLowerCase())
    );
  }

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const { ticketClick } = useContext(SidebarContext);

  return (
    <div className=" bg-gray-200 w-[85%]">
      <Header />
      <div className="bg-white mx-auto my-10 w-[94%] h-auto p-4 ">
        <div className="flex justify-between items-center pb-7">
          <div>
            <button className="border-solid border-2 border-slate-400 p-2 px-3 bg-slate-400 rounded-sm font-bold">
              <Link to="/newticket">New Ticket +</Link>
            </button>
          </div>
          <div className="p-[20px] flex relative">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                className="border-2 rounded-xl border-EEEDEB px-4 py-1 w-[300px] text-xl"
                placeholder="search..."
                {...register("search")}
              />
              <button
                type="submit"
                className="text-2xl absolute right-8 top-7 text-EEEDEB"
              >
                <CiSearch />
              </button>
            </form>
          </div>
        </div>
        <div className="overflow-x-auto w-full">
          {isLoading && ticketClick ? (
            <p>Loading...</p>
          ) : isError ? (
            <p>Error fetching data</p>
          ) : (
            <table className="max-w-[100%] overflow-x-auto w-full">
              <thead>
                <tr className=" text-gray-600 ">
                  <th className=" text-center px-6 py-4 text-left border-solid border-slate-400 border-2 bg-slate-300">
                    تاریخ
                  </th>
                  <th className="text-center px-6 py-4 text-left border-solid border-slate-400 border-2 bg-slate-300">
                    عنوان
                  </th>
                  <th className="text-center px-6 py-4 text-left border-solid border-slate-400 border-2 bg-slate-300">
                    وضعیت
                  </th>
                  <th className="text-center px-6 py-4 text-left border-solid border-slate-400 border-2 bg-slate-300">
                    نام اورگان
                  </th>
                  <th className="text-center px-6 py-4 text-left border-solid border-slate-400 border-2 bg-slate-300">
                    شماره تیکت
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData?.length !== 0 ? (
                  filteredData?.slice(startIndex, endIndex).map((item) => (
                    <tr
                      className="odd:bg-red-200 even:bg-blue-200"
                      key={item.id}
                    >
                      <td className="text-center px-6 py-4 text-left border-solid border-slate-400 border-2 bg-white">
                        <Link to={`/edit/${item.id}`}>{item.date}</Link>
                      </td>
                      <td className="text-center px-6 py-4 text-left border-solid border-slate-400 border-2 bg-white">
                        <Link to={`/edit/${item.id}`}>{item.title}</Link>
                      </td>
                      <td className="text-center px-6 py-4 text-left border-solid border-slate-400 border-2 bg-white">
                        <Link to={`/edit/${item.id}`}>{item.status}</Link>
                      </td>
                      <td className="text-center px-6 py-4 text-left border-solid border-slate-400 border-2 bg-white">
                        <Link to={`/edit/${item.id}`}>{item.name}</Link>
                      </td>
                      <td className="text-center px-6 py-4 text-left border-solid border-slate-400 border-2 bg-white">
                        <Link to={`/edit/${item.id}`}>{item.number}</Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-4 bg-white">
                      Not Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>

        <div className="flex justify-between pt-10">
          <button
            onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
            disabled={page === 1}
          >
            Previous Page
          </button>
          <span>Current Page: {page}</span>
          <button onClick={() => setPage((prevPage) => prevPage + 1)}>
            Next Page
          </button>
        </div>
        <div>
          <h2 className="font-bold text-lg">All Tickets: {data?.length}</h2>
        </div>
      </div>
    </div>
  );
}