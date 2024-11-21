import {
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
} from "../assets";

const Clients = () => {
  return (
    <div className="text-center mt-40 mx-20">
      <h1 className="text-[40px] font-semibold text-darkGrey">Our Clients</h1>
      <p className="text-[18px] text-darkGrey">
        We have been working with some Fortune 500+ clients
      </p>

      <div className="flex items-center justify-between flex-wrap pt-10">
        <img src={client1} width={48} height={48} alt="client1" />
        <img src={client2} width={48} height={48} alt="client2" />
        <img src={client3} width={48} height={48} alt="client3" />
        <img src={client4} width={48} height={48} alt="client4" />
        <img src={client5} width={48} height={48} alt="client5" />
        <img src={client6} width={48} height={48} alt="client6" />
      </div>
    </div>
  );
};

export default Clients;
