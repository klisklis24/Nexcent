import { arrowRight } from "../assets";
import { blogs } from "../constants";
import Button from "./Button";

const Blogs = () => {
  return (
    <div className="flex flex-col md:px-28 px-10 mt-10 gap-4">
      <div className="text-center">
        <h1 className="text-[45px] font-semibold text-darkGrey">
          Caring is the new marketing
        </h1>
        <p className="text-[17px] text-darkGrey">
          The Nexcent blog is the best place to read about the latest membership
          insights, <br /> trends and more. See who&apos;s joining the
          community, read about how our community are increasing their
          membership income and lot&apos;s more.
        </p>
      </div>
      <div className="flex items-center  flex-wrap gap-4">
        {blogs.map((blog, i) => (
          <div
            key={blog.id}
            className={`relative rounded md:mt-0 ${i === 0 || "mt-[82px]"}`}
          >
            <img src={blog.image} alt="image" />
            <div className="absolute  bg-sliverWhite z-5 left-6 -bottom-[80px] w-[317px] h-[176px] rounded text-center">
              <h2 className="text-[20px] font-semibold text-darkGrey mt-4">
                {blog.content}
              </h2>
              <div className="flex items-center gap-1 justify-center mt-4">
                <Button className="font-semibold">Readmore</Button>
                <img src={arrowRight} alt="arrowRight" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
