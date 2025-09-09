import './TopBar.css'
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
      navigate("/login")
    };
  return (
    <nav className="navbar navbar-light" id="navbar">
      <div className="container d-flex justify-content-between align-items-center" >
        <span className="navbar-brand mb-0 h1">MuniTrack</span>
        <div className="d-flex align-items-center gap-3">
          <i className="bi bi-person-circle fs-3"></i>
          <i className="bi bi-box-arrow-in-right fs-3" onClick={handleLogOut}></i>
        </div>
      </div>
    </nav>
  );
};
export default TopBar;
