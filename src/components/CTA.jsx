import { arrowRightWhite } from "../assets";
import Button from "./Button";

const CTA = () => {
  return (
    <div className="mt-36 text-center py-10 bg-sliverWhite">
      <h1 className="text-[50px] font-bold text-darkGrey">
        Pellentesque suscipit <br /> fringilla libero eu.
      </h1>
      <Button
        className="flex items-center gap-2 px-6 py-3 mx-auto mt-4"
        variation="secondary"
      >
        <p>Get a Demo</p>
        <img src={arrowRightWhite} alt="arrow" />
      </Button>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default CTA;
