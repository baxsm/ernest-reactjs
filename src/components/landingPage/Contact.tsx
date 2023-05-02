import Button from "../Button";
import Input from "../Input";

const Contact = () => {
  return (
    <div className="bg-white flex flex-col justify-center place-items-center px-16 py-8">
      <div className="flex flex-col gap-2 mt-20">
        <p className="text-grayText text-lg uppercase font-[500] text-center">
          Get in touch
        </p>
        <h5 className="text-[90px] font-[500] text-center leading-[110px]">
          More
          <br />
          <span className="font-Canela-Regular">questions?</span>
        </h5>
      </div>
      <div className="flex flex-col gap-8 my-12 w-[60%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8 md:mb-20">
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="E-mail" />
        </div>
        <Input type="text" placeholder="Message" />
      </div>
      <Button text='Send Message'/>
    </div>
  );
};

export default Contact;
