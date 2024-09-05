import React from "react";
let claseLink = "px-4 py-2 bg-cyan-400 rounded-lg";
import A from "./A";
function Proyecto({ titulo, descripcion, pagina, codigo, img, imgalt }) {
  return (
    <div className="w-full rounded-xl    bg-tarjeta
     flex flex-col p-4 flex-grow">
      <img src={img} alt={imgalt} className="w-full rounded-xl" />
      <div className="p-4 flex-grow overflow-hidden w-full  flex flex-col">
        <h3 className="text-3xl text-text-pri font-bold h-min">{titulo}</h3>
        <div className="flex flex-col justify-between flex-1 h-full  w-full ">
          <p className="  ">{descripcion}</p>
          <br />
          <span className="h-10 flex gap-4 content-end">
            <A pagina={pagina} texto={"pagina"} />
            <A pagina={codigo} texto={"Codigo"} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Proyecto;
