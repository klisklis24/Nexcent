import { ball, instagram, withLogo, send, twitter, youtube } from "../assets";
const Footer = () => {
  return (
    <div className="md:flex items-center flex-wrap justify-between bg-secondary py-10 md:px-52 sm:px-20 px-10">
      <div>
        <img className="cursor-pointer" src={withLogo} alt="logo" />
        <p className="my-6 text-sliverWhite leading-8">
          Copyright © 2020 Nexcent ltd. <br /> All rights reserved
        </p>

        <div className="flex items-center gap-6">
          <div className="w-[32px] h-[32px] bg-darkGrey flex items-center justify-center rounded-full cursor-pointer">
            <img src={instagram} alt="instagram" />
          </div>
          <div className="w-[32px] h-[32px] bg-darkGrey flex items-center justify-center rounded-full cursor-pointer">
            <img src={ball} alt="ball" />
          </div>
          <div className="w-[32px] h-[32px] bg-darkGrey flex items-center justify-center rounded-full cursor-pointer">
            <img src={twitter} alt="twitter" />
          </div>
          <div className="w-[32px] h-[32px] bg-darkGrey flex items-center justify-center rounded-full cursor-pointer">
            <img src={youtube} alt="youtube" />
          </div>
        </div>
      </div>

      <div className=" flex flex-wrap gap-16 mt-10 md:mt-0">
        <div className="flex flex-col gap-4">
          <h1 className="text-white text-[20px] font-semibold">Company</h1>
          <ul className="text-white">
            <li className="mb-2 cursor-pointer hover:text-primary">About us</li>
            <li className="mb-2 cursor-pointer hover:text-primary">Blog</li>
            <li className="mb-2 cursor-pointer hover:text-primary">
              Contact us
            </li>
            <li className="mb-2 cursor-pointer hover:text-primary">Pricing</li>
            <li className="mb-2 cursor-pointer hover:text-primary">
              Testimonial
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-white text-[20px] font-semibold">Support</h1>
          <ul className="text-white">
            <li className="mb-2 cursor-pointer hover:text-primary">
              Help center
            </li>
            <li className="mb-2 cursor-pointer hover:text-primary">
              Terms of service
            </li>
            <li className="mb-2 cursor-pointer hover:text-primary">Legal</li>
            <li className="mb-2 cursor-pointer hover:text-primary">Privacy</li>
            <li className="mb-2 cursor-pointer hover:text-primary">Status</li>
          </ul>
        </div>
        <div>
          <h1 className="text-white text-[20px] mb-6 font-semibold">
            Stay up to date
          </h1>
          <div className="relative">
            <input
              className="outline-none rounded p-2 placeholder-sliverWhite text-[17px] w-full bg-lightGrey border-none"
              type="email"
              placeholder="Your email address"
            />
            <img
              alt="send"
              className="absolute cursor-pointer right-2 top-3"
              src={send}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
