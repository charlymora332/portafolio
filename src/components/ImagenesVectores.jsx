import React from "react";
import { useState } from "react";
function ImagenesVectores({ src, alt, className, span }) {
  const [isHovered, setIsHovered] = useState(false);

  // Funciones para manejar el evento de hover
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  console.log(isHovered);

  return (
    <figure className="group relative h-min w-40 gap-3 flex   flex-col justify-start text-center xs:w-full  xs:h-auto  z-0 ">
      <figcaption
        className="scale-50 opacity-0 transition-all  duration-500  
  group-hover:scale-100 group-hover:opacity-100 absolute top-0 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-4 py-1 rounded-full w-max text-lg before:content-[''] before:absolute before:top-full before:left-1/2 before:transform before:-translate-x-1/2 before:border-8 before:border-transparent before:border-t-slate-800"
      >
        {span}
      </figcaption>
      <img
        src={src}
        alt={alt}
        id="img"
        className={`aspect-square  z-0 mt-12 object-contain w-full h-auto ${className}`}
        title="hola lindo"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </figure>
  );
}

export default ImagenesVectores;
