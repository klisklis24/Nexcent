import { pana2 } from "../assets";
import Button from "./Button";

const CalendarBottom = () => {
  return (
    <div className="mt-10 mx-8 block md:mx-20 md:flex items-center justify-between gap-10">
      <div className="">
        <img className="max-w-none" src={pana2} alt="banner2" />
      </div>
      <div className="mt-10">
        <h2 className="text-[40px] font-semibold text-darkGrey">
          How to design your site footer like we did
        </h2>
        <p className="my-6 text-darkGrey text-[18px]">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <Button
          className="px-10 py-4 font-semibold text-darkGrey"
          variation="secondary"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default CalendarBottom;
