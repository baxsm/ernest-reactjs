import { FC } from "react";

type InputProps = {
  type: string;
  placeholder: string;
};

const Input: FC<InputProps> = ({ type, placeholder }) => {
  return <input type={type} placeholder={placeholder} className="outline-none border-b-[1px] border-b-black/[0.3] pb-4 w-full placeholder:text-black"/>;
};

export default Input;
