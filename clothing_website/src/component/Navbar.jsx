import HeartIcon from "../assets/heart.svg";
import CartIcon from "../assets/cartLogo.svg";
import UserIcon from "../assets/user.svg";
import ThreeLines from "../assets/threeLines.svg";
import { PartyPopper } from "lucide-react";

export default function Navbar() {
  const navItems = [
    {
      label: "Favourite",
      icon: (
        <div className="tooltip">
          <div className="tooltip-content">
            <div className="animate-pulse text-neutral-300 text-2xl font-black h-full w-fit">
              Favorites
            </div>
          </div>
          <img
            src={HeartIcon}
            alt="Favourite"
            className="w-[55px] h-[55px] hover:opacity-80"
          />
        </div>
      ),
    },
    {
      label: "Cart",
      icon: (
        <div className="tooltip tooltip-bottom">
          <div className="tooltip-content">
            <div className="animate-pulse text-neutral-300 text-2xl font-black h-7 w-full">
              Cart
            </div>
          </div>
          <img
            src={CartIcon}
            alt="Cart"
            className="w-[50px] h-[50px] mb-2 hover:opacity-80"
          />
        </div>
      ),
    },
    {
      label: "User",
      icon: (
        <div className="tooltip">
          <div className="tooltip-content">
            <div className="animate-pulse text-neutral-300 text-2xl font-black h-7">
              User
            </div>
          </div>
          <img
            src={UserIcon}
            alt="User"
            className="w-[50px] h-[50px] mb-2 hover:opacity-85"
          />
        </div>
      ),
    },
  ];
  return (
    <>
      <header className="flex flex-col w-fit space-y-3 lg:space-y-0 md:space-y-0 sm:space-y-0 items-center justify-between px-4 lg:w-full md:w-full font-beatrix-deck-trial sm:flex-row sm:w-full lg:flex-row md:flex-row">
        <ul className="flex flex-row space-x-8 ml-0 sm:ml-0 md:space-y-2 mb-0">
          {[
            <div className="tooltip">
              <div className="tooltip-content ml-16">
                <div className="animate-bounce text-neutral-300 text-2xl font-black flex flex-row gap-1">
                  Surprise <PartyPopper />
                </div>
              </div>

              <img
                src={ThreeLines}
                alt="ThreeLines"
                className="sm:hidden hidden md:hidden lg:block"
              />
            </div>,

            "Home",
            "Collections",
            "New",
          ].map((item, index) => {
            return (
              <li key={index} className="hover:underline cursor-pointer">
                {item}
              </li>
            );
          })}
        </ul>

        <div className="tooltip">
          <div className="tooltip-content">
            <div className="animate-bounce text-neutral-300 text-2xl font-black">
              The Clothing Company
            </div>
          </div>
          <img src="logo.png" alt="logo" className="w-[35px] h-[35px]" />
        </div>

        <ul className="flex flex-row items-center space-x-8 lg:mr-28 md:mr-0 md:mt-0">
          {navItems.map((item, index) => {
            return (
              <li
                key={index}
                className="flex flex-row items-center space-x-2 hover:underline cursor-pointer "
              >
                {item.icon}
              </li>
            );
          })}
        </ul>
      </header>

      <section>
        <ul className="flex flex-col space-x-8 ml-14">
          {["MEN", "WOMEN", "KIDS"].map((item, index) => {
            return (
              <li key={index} className="hover:underline cursor-pointer w-fit">
                {item}
              </li>
            );
          })}

          <label className="input mt-3 bg-[#D9D9D9] rounded-none w-80 p-2 space-x-2 shadow-sm border border-gray-300">
            <svg
              className="h-[2em] opacity-100"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>

            <input
              type="search"
              className="grow bg-transparent placeholder-gray-500 text-gray-700 focus:outline-none"
            />
            <span className="text-gray-500 mr-3 font-beatrix-deck-trial">
              Search
            </span>
          </label>
        </ul>
      </section>
    </>
  );
}
