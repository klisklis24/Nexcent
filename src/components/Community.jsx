import { features } from "../constants";

const Community = () => {
  return (
    <div className="flex flex-col text-center mt-10 mx-20">
      <div>
        <h1 className="text-[40px] font-semibold text-darkGrey mx-auto">
          Manage your entire community <br /> in a single system
        </h1>
        <p className="text-[17px] text-darkGrey mt-2 mb-6">
          Who is Nextcent suitable for?
        </p>
      </div>
      <div className="flex items-center justify-between flex-wrap gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex  flex-col items-center basis-[300px] rounded shadow-xl shadow-sliverWhite  p-4"
          >
            <div className="bg-primary/10 w-[61px] h-[61px] flex items-center justify-center rounded-full p-2">
              <img src={feature.icon} />
            </div>
            <h2 className="text-[40px] font-bold text-darkGrey">
              {feature.title}
            </h2>
            <p className="text-darkGrey text-[17px]">{feature.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
