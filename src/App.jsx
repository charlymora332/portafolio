import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import perfil from "./assets/perfil.png";
import Proyecto from "./components/Proyecto";
import imagenes from "./assets/logoDev/imagenesLogo";
import ImagenesVectores from "./components/ImagenesVectores";
import LinkContacto from "./components/LinkContacto";
import Snap from "./assets/Snap.png";
import TopNBA from "./assets/TopNBA.png";
import conectaConmigo from "./assets/conectaConmigo.png";
import Estudios from "./components/Estudios";
import A from "./components/A";
import menuCer from "./assets/menuCerrado.svg";
import menuAbi from "./assets/menuAbierto.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0); // Puedes utilizar count si es necesario
  const headerRef = useRef(null); // Referencia al header
  const botonHeader = useRef(null); // Referencia al botón

  // Manejador del evento de scroll
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 1) {
          headerRef.current.classList.add("scale-75");
        } else {
          headerRef.current.classList.remove("scale-75");
        }
      }
    };

    // Añadir el event listener cuando el componente se monte
    window.addEventListener("scroll", handleScroll);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Dependencias vacías para ejecutar solo una vez al montar

  // Manejador del evento de clic
  useEffect(() => {
    const boton = botonHeader.current;

    if (boton) {
      // Asociar el evento click al botón
      boton.addEventListener("click", handleClick);
    }

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      if (boton) {
        boton.removeEventListener("click", handleClick);
      }
    };
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  // Función para manejar el clic, alternar el estado del menú y la imagen
  const handleClick = () => {
    setMenuOpen((prevState) => !prevState); // Alterna el estado del menú
    console.log("asas");
    console.log(menuOpen);
    if (menuOpen) {
      headerRef.current.classList.remove("xs:hidden");
    } else {
      headerRef.current.classList.add("xs:hidden");
    }
  };

  return (
    <div className="contenedorGeneralTodo overflow-x-hidden w-screen   ">
      <div
        className="fixed z-20 right-3 top-1  h-16 w-16  md:hidden"
        onClick={handleClick}
      >
        {menuOpen ? (
         
          <img className="absolute w-full h-full" src={menuAbi} alt="df" />
        ) : (
          <img
          className="absolute w-full h-full"
          src={menuCer}
          alt="sd"
          ref={botonHeader}
        />
        )}
      </div>

      <header
        ref={headerRef}
        id="fixedHeader"
        className="bg-header/[40%] backdrop-blur-xl rounded-full w-3/4 h-[10vh] flex justify-around items-center px-3 mx-auto fixed left-1/2 transform -translate-x-1/2 opacity-1  transition-transform  duration-500 xs:scale-1 z-10
       xs:h-full xs:w-full xs:flex-col xs:rounded-none xs:scale-100"
      >
        <a className="" href="#inicio" onClick={handleClick}>
          Inicio
        </a>

        <a className="" href="#proyectos" onClick={handleClick}>
          Proyectos
        </a>
        <a className="" href="#sobreMi" onClick={handleClick}>
          Sobre Mi
        </a>
        <a className="" href="#contacto" onClick={handleClick}>
          Contacto
        </a>
      </header>

      <div className="w-full  px-[10%] xs:px-4">
        <main>
          <div
            className="presentacionSobreMi grid grid-cols-10 h-screen  content-center    "
            id="inicio"
          >
            <div className="col-span-8 flex flex-col justify-end pb-4 xs:col-span-10">
              <h3 className="text-3xl font-medium text-cyan-100 xs:text-2xl">
                Hola
              </h3>
              <h1 className="text-7xl font-bold text-text-pri xs:text-5xl">
                Soy Carlos Mora
              </h1>
              <h5 className="text-4xl font-semibold text-cyan-400 xs:text-3xl">
                Programador web
              </h5>
            </div>
            <img
              src={perfil}
              className="col-span-2 m-auto   rounded-full  xs:col-span-10  xs:h-[20vh]  "
            />
            <h6 className="col-span-10 text-xl pt-4 xs">
              Tecnología en Análisis y Desarrollo de Software, enfocado en el
              desarrollo web. Me especializo en front-end, trabajando con HTML,
              CSS, JavaScript y React.
            </h6>
            <span className="mt-6  h-10 flex col-span-10 ">
              <A
                pagina={
                  "https://drive.google.com/file/d/1VUMkCY0dzp-2VJmNwLstPfsqYvEzcLWF/view?usp=sharing"
                }
                texto={"Descargar CV"}
              />
            </span>
          </div>

          <div id="sobreMi" className="sobreMiDescripcion flex flex-col gap-2">
            <h2 className="">Sobre mi</h2>
            <p className="">
              ¡Hola! Soy Carlos Mora, un apasionado de la tecnología desde el
              bachillerato. Mi interés por la programación se despertó en el
              grado 11, y desde entonces me he dedicado a formarme de manera
              continua en este campo.
            </p>
            <p>
              Actualmente, estudio para convertirme en Técnico en Sistemas y
              Tecnólogo en Análisis y Desarrollo de Software. Me especializo en
              el desarrollo web, con un enfoque particular en el frontend.
              Disfruto trabajando con tecnologías como HTML, CSS y JavaScript, y
              me especializo en el uso del framework React para crear
              experiencias web interactivas y visualmente atractivas.
            </p>

            <div className="pt-4">
              <h2 className="">Skills</h2>
              <div className="flex  justify-center w-full xs:grid xs:grid-cols-[repeat(auto-fill,_minmax(55px,_1fr))] xs:max-w-[calc(80px*5)] xs:auto-rows-auto xs:gap-2 mx-auto">
                {imagenes.map((imagen) => (
                  <ImagenesVectores
                    key={imagen.id}
                    src={imagen.img}
                    alt={imagen.alt}
                    span={imagen.sobreElla}
                    className=""
                  />
                ))}
              </div>
            </div>
            <div id="proyectos" className="">
              <h1 className="text-6xl mb-6 font-semibold ">Proyectos</h1>
              <div className="  contenedorProyectos grid grid-cols-auto-min-350 gap-8 mb-6 xs:grid-cols-1">
                <Proyecto
                  titulo={"Top Jugadores NBA"}
                  descripcion={
                    " Una aplicación web para mostrar los 15 mejores jugadores de la NBA en 2024, con la capacidad de agregar jugadores adicionales y ver sus detalles."
                  }
                  img={TopNBA}
                  codigo={
                    "https://github.com/charlymora332/top-15-jugadores-nba"
                  }
                  pagina={
                    "https://charlymora332.github.io/top-15-jugadores-nba/"
                  }
                />
                <Proyecto
                  titulo={"Snap"}
                  descripcion={
                    "Una landing page diseñada para ofrecer una experiencia visual atractiva y efectiva, siguiendo los desafíos de Frontend Mentor."
                  }
                  img={Snap}
                  codigo={"https://github.com/charlymora332/snap"}
                  pagina={"https://charlymora332.github.io/snap/"}
                />
                <Proyecto
                  titulo={"Conecta Conmigo"}
                  descripcion={
                    " Un sitio web para promover el trabajo de un desarrollador, integrando perfiles en redes sociales y opciones de contacto directo por correo electrónico."
                  }
                  img={conectaConmigo}
                  codigo={"https://github.com/charlymora332/Conecta_Conmigo"}
                  pagina={"https://charlymora332.github.io/Conecta_Conmigo/"}
                />
              </div>
            </div>
            <h2 className="my-5 ">Estudios</h2>
            <div className="estudios grid grid-cols-auto-min-500 xs:grid-cols-1  gap-8">
              <Estudios
                titulo={"Fundamentos de Programación y Tecnologías Digitales"}
                ins={"Universidad tecnológica de Pereira"}
                fecha={"2022"}
                descripcion={""}
              />
              <Estudios
                titulo={"Desarrollo Web Front-end"}
                ins={"Egg Academy"}
                fecha={"2023"}
                descripcion={""}
              />
              <Estudios
                titulo={
                  "Tecnica Profesional En Soporte De Sistemas En Informática"
                }
                ins={"Corporación Unificada Nacional de Educación Superior"}
                fecha={"2023 - 2024"}
                descripcion={""}
              />
              <Estudios
                titulo={"Tecnologia En Análisis y Desarrollo De Software"}
                ins={"SENA"}
                fecha={"2023 - 2025"}
                descripcion={""}
              />
            </div>
          </div>
        </main>
        <footer id="contacto">
          <h3 className=" mt-8 pb-1 mb-8 text-5xl text-text-pri font-semibold shadow-bottom-only text-center shadow-neutral-500/50">
            Contáctame
          </h3>
          <nav className="contenedorDeBotones h-16 gap-x-4 flex justify-center">
            <LinkContacto
              className={"bi-github"}
              href={"https://github.com/charlymora332"}
            />

            <LinkContacto
              className={"bi-linkedin"}
              href={"https://www.linkedin.com/in/carlos-mora-a5b1b9269"}
            />
            <LinkContacto
              className={"bi-whatsapp"}
              href={"https://wa.me/+573114443305"}
            />
            <LinkContacto
              className={"bi-instagram"}
              href={"https://www.instagram.com/herrera.exxe/"}
            />
          </nav>
        </footer>
      </div>
    </div>
  );
}

export default App;
