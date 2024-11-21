import { navLinks } from "../constants";
import { logo } from "../assets/index";
import Button from "./Button";
import { useEffect } from "react";

const NavBar = () => {
  useEffect(function () {
    const menuToogle = document.getElementById("menu-toggle");

    function handleClick() {
      if (menuToogle.classList.contains("open"))
        menuToogle.classList.remove("open");
      else menuToogle.classList.add("open");
    }
    menuToogle.addEventListener("click", handleClick);
    return () => menuToogle.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="flex items-center justify-between  text-darkGrey bg-sliverWhite h-[84px] w-[100%] mx-auto px-6  md:px-14 fixed top-0 backdrop-blur-20 z-10">
      <div className="cursor-pointer w-[154px] h-[24px] ">
        <img src={logo} className="w-[100%] h-[100%] bg-cover" />
      </div>

      <ul className="md:flex hidden items-center gap-10">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a href="#hero">{link.title}</a>
          </li>
        ))}
      </ul>
      <div className="md:flex hidden items-center gap-2">
        <Button variation="primary">Login</Button>
        <Button variation="secondary">Sign up</Button>
      </div>
      <div
        id="menu-toggle"
        className="group cursor-pointer w-8 h-8 block md:hidden"
      >
        <div className="w-full h-1 relative group-open:top-3 group-open:rotate-45 bg-darkGrey rounded-full transition-all"></div>
        <div className="w-6 my-1 h-1 group-open:opacity-0 transition-all bg-darkGrey rounded-full"></div>
        <div className="w-full h-1 group-open:-rotate-45 transition-all bg-darkGrey group-open:-top-3 rounded-full"></div>

        <div className="absolute group-open:block hidden top-20 right-0 bg-sliverWhite w-full text-center transition-colors">
          <ul className="md:hidden flex flex-col font-bold">
            {navLinks.map((link) => (
              <li key={link.id} className="p-3 cursor-pointer hover:bg-white">
                <a href="#hero">{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
