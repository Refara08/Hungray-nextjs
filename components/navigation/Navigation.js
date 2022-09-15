import { useState } from "react";
import Link from "next/link";

import { Squash as Hamburger } from "hamburger-react";

import NavigationMobile from "./mobile-navigation/NavigationMobile";
import UtensilsIcon from "../icons/Utensils";
import BagIcon from "../icons/BagIcon";
import CartMobileBtn from "./cart/CartMobileBtn";

const NavItems = [
  { tag: "Home", link: "/" },
  { tag: "About Us", link: "/#about-us" },
  { tag: "Menu", link: "/#menu" },
  { tag: "Testimonials", link: "/#testimonials" },
  { tag: "Reservation", link: "/#reservation" },
  { tag: "Contact Us", link: "/#contact" },
];

const Navigation = () => {
  const [currNav, setCurrNav] = useState("Home");
  const [isHamActive, setIsHamActive] = useState(false);

  const closeHamHandler = () => {
    setIsHamActive(false);
  };

  return (
    <nav className=" bg-light-yellow text-black sticky top-0 z-30">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 pb-2">
        <Link href={"/"}>
          <a
            onClick={() => setCurrNav("Home")}
            className="flex items-center gap-1 pb-2 text-3xl"
          >
            <UtensilsIcon color="#FFBB44" size={"3vh"} />
            <span className="font-bold">Hungray</span>
          </a>
        </Link>
        <ul className="hidden lg:flex justify-end items-center gap-8">
          {NavItems.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer mx-2 font-semibold transition duration-300 border-b-2 pb-2 hover:text-black hover:border-yellow ${
                currNav === item.tag
                  ? "text-black border-yellow"
                  : "text-stone-500 border-transparent"
              }`}
              onClick={() => setCurrNav(item.tag)}
            >
              <Link href={item.link}>
                <a>{item.tag}</a>
              </Link>
            </li>
          ))}
          <Link href="/cart">
            <a>
              <li className="relative mb-2 transition duration">
                <span className="absolute block -top-3 -right-3 bg-red-600 text-white px-[0.4rem] rounded-full text-sm">
                  3
                </span>
                <BagIcon size="3vh" />
              </li>
            </a>
          </Link>
        </ul>
        <ul className="block lg:hidden">
          <li>
            <Hamburger
              size={25}
              distance="sm"
              toggled={isHamActive}
              toggle={setIsHamActive}
            />
          </li>
        </ul>
        {isHamActive && (
          <NavigationMobile
            onClose={closeHamHandler}
            currNav={currNav}
            setCurrNav={setCurrNav}
            items={NavItems}
          />
        )}
        <CartMobileBtn />
      </div>
    </nav>
  );
};

export default Navigation;
