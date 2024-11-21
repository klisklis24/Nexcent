import {
  arrowRight,
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  pana3,
} from "../assets";

const Customers = () => {
  return (
    <div className="md:flex justify-between gap-10 md:px-28 px-10 mt-10">
      <div>
        <img className="max-w-none" src={pana3} alt="banner3" />
      </div>
      <div>
        <p className="text-[18px] text-darkGrey">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <h2 className="text-primary text-[25px] font-semibold my-2">
          Tim Smith
        </h2>
        <p className="text-[18px] text-darkGrey">
          British Dragon Boat Racing Association
        </p>
        {/* <div> */}
        <div className="flex items-center justify-between gap-4 flex-wrap pt-10">
          <img src={client1} width={48} height={48} alt="client1" />
          <img src={client2} width={48} height={48} alt="client2" />
          <img src={client3} width={48} height={48} alt="client3" />
          <img src={client4} width={48} height={48} alt="client4" />
          <img src={client5} width={48} height={48} alt="client5" />
          <img src={client6} width={48} height={48} alt="client6" />
          <div className="flex items-center gap-2 cursor-pointer">
            <h2 className="text-[18px] text-primary">Meet all customers</h2>
            <img src={arrowRight} alt="arrow" />
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Customers;
