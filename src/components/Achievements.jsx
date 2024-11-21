import { stats } from "../constants";

const Achievements = () => {
  return (
    <div className="md:flex block items-center justify-between bg-sliverWhite mt-10 py-20 md:px-32 px-10 gap-10">
      <div className="flex flex-col">
        <h1 className="text-[50px] font-bold text-darkGrey">
          Helping a local <br />{" "}
          <span className="text-primary">business reinvent itself</span>
        </h1>
        <p className="text-[18px] text-darkGrey">
          We reached here with our hard work and dedication
        </p>
      </div>
      <div className="grid grid-rows-2 grid-cols-2 md:gap-x-14 gap-x-10 md:gap-y-8 gap-y-4 mt-10">
        {stats.map((stat) => (
          <div key={stat.id} className="flex items-center gap-4">
            <div className="flex items-center justify-center w-[46px] h-[31px]">
              <img
                className="w-full h-full bg-cover"
                src={stat.icon}
                alt="icon"
              />
            </div>
            <div>
              <h2 className="font-bold text-darkGrey">{stat.value}</h2>
              <p className="text-darkGrey">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
