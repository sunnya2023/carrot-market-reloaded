import React, { InputHTMLAttributes } from "react";
interface IInputProps {
  errors?: string[];
  name: string;
}

function Input({
  errors = [],
  name,
  ...rest
}: IInputProps & InputHTMLAttributes<HTMLInputElement>) {
  console.log(rest);
  return (
    <div className="flex flex-col gap-2">
      <input
        className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-1 focus:ring-2 transition ring-neutral-200 focus:ring-orange-500 border-none placeholder:text-neutral-400 px-2"
        name={name}
        {...rest}
      />
      {errors?.map((error, index) => (
        <span key={index} className="text-red-500 font-medium">
          {error}
        </span>
      ))}
    </div>
  );
}

export default Input;
