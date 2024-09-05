import React from "react";

function A({ pagina, texto }) {
  return (
    <a
      className="px-4 pt-1  bg-btn-bg text-text-sec border-spacing-8 font-bold  rounded-lg border-double border-4 border-borde transition ease-in-out hover:border-solid hover:scale-125 hover:bg-btn-hover hover:text-text-pri"
      href={pagina}
    >
      {texto}
    </a>
  );
}

export default A;
