import './TopBar.css'
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/login");
  };

  const handleGoToRegisterCitizen = () => {
    navigate("/citizens/new");
  };

  const handleGoToRegisterOperator = () => {
    navigate("/operators/new");
  };
  const handleGoToHome = () => {
    navigate("/CitizenSearch");
  };
  const handleGoToArea = () =>{
navigate("/AreaDetails");
  };

  const operador = {
    nombre: "Juan Perez",
    nivel: "Operador Nivel 1"
  };

  return (
    <nav className="navbar navbar-dark bg-dark" id="navbar">
      <div className="container d-flex justify-content-between align-items-center">

        <div className="d-flex align-items-center gap-4">
          <span className="navbar-brand mb-0 h1">MuniTrack</span>
          <button className="nav-btn" onClick={handleGoToHome}>
            Home
          </button>
          <button className="nav-btn" onClick={handleGoToArea}>Areas</button>
          <button className="nav-btn" onClick={handleGoToRegisterOperator}>
            Registrar Operador
          </button>
          <button className="nav-btn" onClick={handleGoToRegisterCitizen}>
            Registrar Ciudadano
          </button>
        </div>

        <div className="d-flex align-items-center gap-3">
          <div className="text-end me-2">
            <div className="fw-bold text-white">{operador.nombre}</div>
            <div className="small text-white">{operador.nivel}</div>
          </div>

          <i className="bi bi-person-circle fs-3 text-white"></i>
          <i
            className="bi bi-box-arrow-in-right fs-3 text-white"
            onClick={handleLogOut}
            style={{ cursor: "pointer" }}
          ></i>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
