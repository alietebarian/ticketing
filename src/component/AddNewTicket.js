import { data } from "autoprefixer";
import axios from "axios";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import { useMutation, useQueryClient } from "react-query";
import { Link } from "react-router-dom";

const addTicket = async (user) => {
  const response = await axios.post(
    "https://gist.githubusercontent.com/alietebarian/a4299fc4c60a5ff983d4ce24af935885/raw/3c1526fa03d2a5dc1684c127f4520e73965d376a/data.json",
    user
  );
  return response.data;
};

export default function AddNewTicket() {
  const { control, handleSubmit, register, formState: {errors} } = useForm();
  const [submittedDate, setSubmittedDate] = useState(null); // استفاده صحیح از useState
  const queryClient = useQueryClient();  

  const onSubmit = ({ date }) => {
    mutation.mutate(data)
  };

  const mutation = useMutation(addTicket, {
    onSuccess: () => {
        queryClient.invalidateQueries('users')
    }
  })

  return (
    <div className="bg-slate-100 w-[80%] h-[60%] mx-auto my-40 p-5 rounded-md">
      <div className="flex justify-between">
        <h2 className="font-bold text-3xl mb-5">New Ticket</h2>
        <button className="border-solid border-2 border-slate-400 px-3 bg-blue-500 rounded-sm font-bold">
          <Link to="/">Home Page</Link>
        </button>
      </div>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <label className="font-medium py-2">ticket number</label>
        <input
          type="text"
          className="py-2 w-[60%] ml-14 rounded-md px-2 text-lg outline-none"
          {...register("number", {
            required: "this field is empty!",
          })}
        />
        {errors.number && (
          <span className="text-red-500">{errors?.number.message}</span>
        )}
        <label className="font-medium py-2">organ name</label>
        <input
          type="text"
          className="py-2 w-[60%] ml-14 rounded-md px-2 text-lg outline-none"
          {...register("name", {
            required: "this field is empty",
          })}
        />
        {errors.name && (
          <span className="text-red-500">{errors?.name.message}</span>
        )}
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
          {...register("title", {
            required: "this field is empty",
          })}
        />
        {errors.title && (
          <span className="text-red-500">{errors?.title.message}</span>
        )}
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
