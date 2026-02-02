import React from 'react';

const Button = ({ title, onClick, className, icon }) => {
  return (
    <button
      className={`bg-primary px-3 py-2 md:text-xl text-sm rounded-md text-white md:w-53 w-full mx-auto cursor-pointer flex gap-3 justify-center  font-semibold active:scale-90 duration-200 transition-all hover:bg-transparent hover:text-primary   border-2 border-primary  ${className}`}
      onClick={onClick}
    >
      {icon}
      {title}
    </button>
  );
};

export default Button;
