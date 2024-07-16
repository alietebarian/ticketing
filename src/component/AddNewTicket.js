import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-multi-date-picker";

export default function AddNewTicket() {
  const { control, handleSubmit } = useForm();
  const [submittedDate, setSubmittedDate] = useState(null); // استفاده صحیح از useState

  const onSubmit = ({ date }) => {
    setSubmittedDate(date);
  };

  return (
    <div className="bg-slate-100 w-[80%] h-[60%] mx-auto my-40 p-5 rounded-md">
      <h2 className="font-bold text-3xl mb-5">New Ticket</h2>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <label className="font-medium py-2">ticket number</label>
        <input
          type="text"
          className="py-2 w-[60%] ml-14 rounded-md px-2 text-lg outline-none"
        />

        <label className="font-medium py-2">organ name</label>
        <input
          type="text"
          className="py-2 w-[60%] ml-14 rounded-md px-2 text-lg outline-none"
        />

        <label className="font-medium py-2">status</label>
        <div className="">
          <input type="radio" name="status" value="Active" /> 
          <label htmlFor="Active">Active</label>
          <br />
          <input type="radio" name="status" value="Isactive" /> 
          <label htmlFor="Isactive">Isactive</label>
          <br />
          <input type="radio" name="status" value="Pending" />
          <label htmlFor="Pending">Pending</label>
          <br />
        </div>

        <label className="font-medium py-2">title</label>
        <input
          type="text"
          className="py-2 w-[60%] ml-14 rounded-md px-2 text-lg outline-none"
        />

        <label className="font-medium py-2">Date</label>
        <Controller
          control={control}
          name="date"
          rules={{ required: true }} // optional
          render={({
            field: { onChange, name, value },
            fieldState: { invalid, isDirty }, // optional
            formState: { errors }, // optional, but necessary if you want to show an error message
          }) => (
            <>
              <DatePicker
                value={value || ""}
                onChange={(date) => {
                  onChange(date?.isValid ? date : "");
                }}
                format="YYYY/MM/DD"
              />
              {errors && errors[name] && errors[name].type === "required" && (
                // if you want to show an error message
                <span className="text-red-500">this field is empty!</span>
              )}
            </>
          )}
        />
        <input
          type="submit"
          className="cursor-pointer bg-blue-500 py-2 my-4 mt-8 w-[25%] m-auto font-bold"
        />
      </form>
    </div>
  );
}
