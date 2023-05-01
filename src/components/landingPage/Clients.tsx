import { clients } from "../../constants/data";
import { useState } from "react";

function Clients() {
  const [isHoverActiveId, setIsHoverActiveId] = useState<string>("");

  return (
    <div className="flex flex-col justify-center place-items-center gap-4 bg-lightWhite px-16 py-12">
      <div className="flex flex-col gap-2 mt-12">
        <p className="text-grayText text-lg uppercase font-[500] text-center">
          Our Clients
        </p>
        <h5 className="text-[90px] font-[500] text-center leading-[110px]">
          Relations
          <br />
          <span className="font-Canela-Regular">based on trust</span>
        </h5>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 px-10 md:px-20">
        {clients.map((client, index) => {
          return (
            <div
              className="cursor-pointer relative"
              key={`${client.id}_${index}`}
              onMouseOver={() => {
                setIsHoverActiveId(client.id);
              }}
              onMouseOut={() => {
                setIsHoverActiveId("");
              }}
            >
              <img src={client.image} alt={client.id} />
              <div
                className={`bg-lightWhite/[0.6] z-20 duration-300 min-w-full min-h-full absolute top-0 left-0 ${
                  isHoverActiveId !== client.id && isHoverActiveId !== ""
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Clients;
