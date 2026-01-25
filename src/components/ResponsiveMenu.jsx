import { UserButton, useUser } from '@clerk/clerk-react';
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ResponsiveMenu = ({ openNav, setOpenNav,commonClass }) => {
  const { user } = useUser();

  return (
    <aside
      className={`${openNav ? 'left-0' : '-left-[100%]'} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white px-8 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md transition-all duration-400`}
    >
    
      <article>
        <section className="flex  items-center justify-start gap-3 relative">
            <button className='absolute -top-12 -right-2 md:hidden z-20'onClick={()=>setOpenNav(false)}>X</button>
          {user ? <UserButton size={50} /> : <FaUserCircle size={50} />}
          <div>
            <h1>Hello,{user?.firstName}</h1>
            <h1 className="text-sm text-slate-500"> Premium User</h1>
          </div>
        </section>

        <nav className="mt-12">
          <ul className="flex flex-col gap-7 text-2xl font-semibold">
            <Link to={'/'} className={commonClass}  onClick={()=>setOpenNav(false)}>
              <li>Home</li>
            </Link>

            <Link to={'/products'} className={commonClass} onClick={()=>setOpenNav(false)}>
              <li>Products</li>
            </Link>

            <Link to={'/about'} className={commonClass} onClick={()=>setOpenNav(false)}>
              <li>About</li>
            </Link>

            <Link to={'/contact'} className={commonClass} onClick={()=>setOpenNav(false)}>
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
      </article>
    </aside>
  );
};

export default ResponsiveMenu;
