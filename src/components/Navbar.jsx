import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks, personalInfo } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${
        scrolled ? "bg-primary/95 backdrop-blur-md shadow-lg shadow-black/40" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-3'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='Farhan Attar Logo' className='w-10 h-10 object-contain hover:scale-110 transition-transform' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex items-center'>
            Farhan Attar &nbsp;
            <span className='sm:inline-block hidden text-[#915EFF] font-semibold'> | Portfolio</span>
          </p>
        </Link>

        <ul className='list-none hidden lg:flex flex-row gap-8 items-center'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-[#915EFF]" : "text-secondary"
              } hover:text-white text-[16px] font-medium cursor-pointer transition-colors duration-200`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li>
            <a
              href={personalInfo.github}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-[#915EFF] hover:bg-[#7e49f6] text-white text-[14px] font-semibold px-4 py-2 rounded-lg transition-colors shadow-md shadow-primary inline-flex items-center gap-1.5'
            >
              GitHub
            </a>
          </li>
        </ul>

        <div className='lg:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[180px] z-10 rounded-xl border border-[#915EFF]/20 shadow-2xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-[#915EFF]" : "text-secondary"
                  } hover:text-white transition-colors`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li className='w-full pt-2 border-t border-white/10'>
                <a
                  href={personalInfo.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-center block w-full bg-[#915EFF] text-white text-[14px] font-semibold py-2 rounded-lg'
                >
                  GitHub Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
