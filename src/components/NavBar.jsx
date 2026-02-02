import ResponsiveMenu from '@/components/ResponsiveMenu';
import { useCart } from '@/context/CartContext';
import Cart from '@/pages/Cart';
import Home from '@/pages/Home';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { MapPin } from 'lucide-react';
import React, { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { FaCaretDown } from 'react-icons/fa';
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import { IoCartOutline } from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom';

const NavBar = ({ location, getLocation, setOpenDropDown, openDropDown }) => {
  const { cartItem } = useCart();

  const toggleDropDown = () => {
    setOpenDropDown(!openDropDown);
  };

  const [openNav, setOpenNav] = useState(false);

  const menuItemCommonClass = ({ isActive }) =>
    `${isActive ? 'border-b-3 transition-all border-primary' : 'text-black'} cursor-pointer`;

  return (
    <article className="py-1 h-16  sticky top-0 left-0 w-full  z-50  backdrop-blur-3xl bg-white/15  flex justify-center items-center shadow-lg ">
      <header className=" py-1 wrapper   flex  justify-between items-center   ">
        {/* left section */}
        <section className="flex gap-7 items-center ">
          {/* logo */}

          <div className="">
            <Link to={'/'}>
              <h1 className="font-bold text-3xl">
                <strong className="font-serif text-primary">F</strong>atro
              </h1>
            </Link>
          </div>

          <div className="md:flex gap-1 cursor-pointer text-gray-950 items-center hidden">
            <MapPin className="text-primary" />
            <span className="font-semibold">
              {location ? (
                <div className="-space-y-1">
                  <p>{location.city}</p> <p>{location.state}</p>
                </div>
              ) : (
                'Add Address'
              )}
            </span>
            <FaCaretDown onClick={toggleDropDown} />
          </div>

          {/* open close location dropdown */}

          {openDropDown ? (
            <div className="w-[250px] h-max shadow-2xl z-50 bg-white fixed top-15 left-60 border-2 p-5 border-gray-100 rounded-lg">
              <h1 className="font-semibold mb-4 text-xl flex justify-between">
                Change Location
                <span onClick={toggleDropDown}>
                  <CgClose />
                </span>
              </h1>
              <button
                onClick={getLocation}
                className="bg-primary text-white px-3 rounded-md py-1 font-semibold"
              >
                Detect My Location
              </button>
            </div>
          ) : null}
        </section>

        {/* menu section */}
        <nav className="flex gap-7 items-center">
          <ul className=" md:flex  gap-7 items-center text-xl font-semibold hidden">
            <NavLink to={'/'} className={menuItemCommonClass}>
              <li>Home</li>
            </NavLink>

            <NavLink to={'/products'} className={menuItemCommonClass}>
              <li>Products</li>
            </NavLink>

            <NavLink to={'/about'} className={menuItemCommonClass}>
              <li>About</li>
            </NavLink>

            <NavLink to={'/contact'} className={menuItemCommonClass}>
              <li>Contact</li>
            </NavLink>
          </ul>
          <div className="hidden">
            <Cart location={location} getLocation={getLocation} />
          </div>
          <Link to={'cart'} className="relative">
            <IoCartOutline className="w-7 h-7" />
            <span className="bg-primary px-2 rounded-full absolute -top-3 -right-3 text-white">
              {cartItem.length}
            </span>
          </Link>

          {/* clerk links */}
          <section className="hidden md:block">
            <SignedOut>
              <SignInButton className="bg-primary text-white px-3 py-1 rounded-md cursor-pointer" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </section>
          {/* mobile right toggle nav */}
          {openNav ? (
            <HiMenuAlt3 className="w-7 h-7 md:hidden" onClick={() => setOpenNav(false)} />
          ) : (
            <HiMenuAlt1 className="h-7 w-7 md:hidden" onClick={() => setOpenNav(true)} />
          )}
        </nav>
      </header>
      {/* Responsive menuBar for mobile devices */}

      <ResponsiveMenu openNav={openNav} setOpenNav={setOpenNav} commonClass={menuItemCommonClass} />
    </article>
  );
};

export default NavBar;
