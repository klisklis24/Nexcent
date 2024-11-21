import { pana1 } from "../assets";
import Button from "./Button";

const CalendarTop = () => {
  return (
    <div className="mt-10 mx-8 block md:mx-20 md:flex items-center justify-between gap-10">
      <div className="">
        <img className="max-w-none" src={pana1} alt="banner2" />
      </div>
      <div>
        <h2 className="text-[40px] font-semibold text-darkGrey">
          The unseen of spending three <br /> years at Pixelgrade
        </h2>
        <p className="my-6 text-darkGrey text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
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

export default CalendarTop;
