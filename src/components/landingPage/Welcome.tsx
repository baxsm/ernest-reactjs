import { WelcomeText } from "../../constants/data";
import { useRef} from "react";

const Welcome = () => {
  
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  return (
    <div className="bg-white py-32">
      <div className="flex flex-col justify-center place-items-center gap-4">
        <p className="text-grayText font-[500] text-lg uppercase">
          Welcome to Our Agency
        </p>
        <div className="flex flex-col text-[90px] font-[500] text-black">
          <p ref={text1Ref} className="truncate">
            {WelcomeText}
          </p>
          <p ref={text2Ref} className="truncate">
            {WelcomeText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
