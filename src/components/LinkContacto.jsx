import React from "react";

function LinkContacto({ href, className }) {
  return (
    <a
      className=" group boton  h-16 w-16  flex justify-center content-center items-center scale-75 tras hover:scale-110  duration-300 bi text-5xl text-icon-inactive transition delay-100 ease-in-out hover:text-icon-active  "
      href={href}
      target="_blank"
    >
      <i className={` ${className}`}></i>
    </a>
  );
}

export default LinkContacto;
