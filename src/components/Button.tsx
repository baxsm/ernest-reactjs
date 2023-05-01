import { FC } from "react";

interface ButtonProps {
  text: string;
}

const Button: FC<ButtonProps> = ({ text }) => {
  return (
    <button className="py-4 px-8 rounded-full bg-buttonPrimary mt-20 text-white font-semibold">
      {text}
    </button>
  );
};

export default Button;
