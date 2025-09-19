import "./AreaDetails.css"; 
import { FaUsers, FaHandsHelping, FaHome, FaBook, FaGlobe } from "react-icons/fa";
import TopBar from "../topBar/TopBar.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AreaDetails = () => {
  const mesas = [
    {
      titulo: "Género",
      desc: "Espacio de articulación para promover la igualdad de oportunidades y el acompañamiento en políticas de género.",
      icono: <FaUsers />,
      color: "#e74c3c",
    },
    {
      titulo: "Desarrollo Social",
      desc: "Mesa orientada a coordinar programas de asistencia y fortalecimiento comunitario.",
      icono: <FaHandsHelping />,
      color: "#27ae60",
    },
    {
      titulo: "Mesa de trabajo San Fernando",
      desc: "Grupo local que aborda problemáticas barriales y proyectos de integración social en San Fernando.",
      icono: <FaHome />,
      color: "#2980b9",
    },
    {
      titulo: "Básica Centro",
      desc: "Equipo de trabajo que impulsa actividades educativas y comunitarias en la zona céntrica.",
      icono: <FaBook />,
      color: "#8e44ad",
    },
    {
      titulo: "Básica Martín Fierro",
      desc: "Mesa enfocada en proyectos sociales y culturales para la comunidad de Martín Fierro.",
      icono: <FaGlobe />,
      color: "#f39c12",
    },
  ];
  

  const settings = {
    dots: false,          // bolitas de navegación
    infinite: true,      // loop infinito
    speed: 500,
    slidesToShow: 4,     // cantidad de tarjetas visibles
    slidesToScroll: 1,   // cantidad que se mueven por vez
    
    responsive: [
      {
        breakpoint: 768, // para tablets y móviles
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <TopBar />
      <div id="fondo">
         <h2>Áreas</h2>
        <div className="container py-3">
          <Slider {...settings}>
            {mesas.map((mesa, idx) => (
              <div key={idx} className="area-card-wrapper">
                <div className="area-card">
                  <div
                    className="icon-circle"
                    style={{ backgroundColor: mesa.color }}
                  >
                    {mesa.icono}
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{mesa.titulo}</h5>
                    <p className="card-text">{mesa.desc}</p>
                    <div className="card-buttons">
                      <button className="btn-action edit">
                        <i className="bi bi-pencil-square"></i> Editar
                      </button>
                      <button className="btn-action delete">
                        <i className="bi bi-trash"></i> Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AreaDetails;
