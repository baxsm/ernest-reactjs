import { useState } from "react";
import { ArrowUp, SocialIcon } from "../assets/icons";
import { socials } from "../constants/data";

const Footer = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className="px-16 py-20 pb-0 flex justify-between place-items-center overflow-hidden">
      <div className="flex justify-start place-items-center gap-8 w-[240px]">
        <ArrowUp />
        <p className="text-[0.75rem] text-black font-[500]">Back Top</p>
      </div>
      <div className="lg:block mx-auto flex justify-center place-items-center text-center">
        <p className="text-[0.75rem]">2023 &copy; BAXSM. All rights reserved</p>
      </div>
      <div
        className="relative float-right items-right justify-end w-[240px] h-[160px] z-20 flex overflow-hidden"
        onMouseOver={() => {
          setIsActive(true);
        }}
        onMouseOut={() => {
          setIsActive(false);
        }}
      >
        <div className={`flex justify-center place-items-center gap-8 duration-300 absolute bottom-[4.5rem] y-inset-0 right-0 ${isActive ? "bottom-[7.0rem]" : ""}`}>
          <p className="text-[0.75rem] text-black font-[500]">Follow Us</p>
          <SocialIcon className={`duration-300 ${isActive ? 'hidden' : 'block'}`}/>
        </div>
        <div className={`absolute duration-300 flex gap-8 items-center justify-center right-0 ${isActive ? "bottom-[4.2rem]" : "bottom-[-200px]"}`}>
          {socials.map((social, index) => {
            return (
              <a href={social.link} key={`${social.name}_${index}`} className="cursor-pointer text-gray-500 text-[0.75rem] font-[500]">
                {social.abb}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
