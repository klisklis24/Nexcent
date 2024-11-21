import { hero } from "../assets";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="md:flex block justify-between  items-center gap-8  md:mx-28 mx-10">
      <div className="">
        <h1 className="text-[60px] text-darkGrey md:font-bold font-semi leading-[70px] ">
          Lessons and insights <br />
          <span className="text-primary ">from 8 years</span>
        </h1>
        <p className="my-6 text-darkGrey text-[18px]">
          Where to grow your business as a photographer: site or social media?
        </p>
        <Button variation="secondary" className="px-8 py-4">
          Register
        </Button>
      </div>
      <div className="mt-10">
        <img src={hero} alt="hero-banner" width={391} height={407} />
      </div>
    </div>
  );
};

export default Hero;
