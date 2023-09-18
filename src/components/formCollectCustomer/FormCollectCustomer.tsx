import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import IconClose from "../IconClose/IconClose";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/states/store";
import { setCloseFormCollect } from "@/states/chat/chat.slice";

interface FormCollectCustomerProps {
  field: any[];
}

export default function FormCollectCustomer({}:FormCollectCustomerProps) {
  return (
    <div className="px-10 w-[80%]">
      <CollectForm />
    </div>
  );
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(6)
});

function CollectForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema)
  });
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = handleSubmit((data) => console.log(data));

  console.log(watch("email"));

  console.log(errors);

  const onCloseForm = () => {
    dispatch(setCloseFormCollect())
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="relative">
        <div className="flex justify-end cursor-pointer" onClick={onCloseForm}>
          <IconClose/>
        </div>
        <div className="mb-8">
          <label
            htmlFor="email"
            className={`block font-bold text-sm mb-2 ${
              errors.email ? "text-red-400" : "text-black"
            }`}
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="hey@chrisoncode.io"
            className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-purple-600 ${
              errors.email
                ? "text-red-300 border-red-400"
                : "text-black border-purple-400"
            }`}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-2">
              A valid email is required.
            </p>
          )}
        </div>

        <div className="mb-8">
          <label
            htmlFor="password"
            className={`block font-bold text-sm mb-2 ${
              errors.password ? "text-red-400" : "text-black"
            }`}
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="********"
            className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4 text-black focus:bg-purple-600${
              errors.password ? "border-red-400" : "border-purple-400"
            }`}
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-2">
              Your password is required.
            </p>
          )}
        </div>

        <button className="inline-block bg-yellow-500 text-yellow-800 rounded shadow py-2 px-5 text-sm">
          Submit
        </button>
      </form>
    </div>
  );
}
