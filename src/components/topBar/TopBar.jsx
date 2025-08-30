import './TopBar.css'

const TopBar = () => {
  return (
    <nav className="navbar navbar-light" id="navbar">
      <div className="container d-flex justify-content-between align-items-center" >
        <span className="navbar-brand mb-0 h1">Home</span>
        <div className="d-flex align-items-center gap-3">
          <i className="bi bi-person-circle fs-3"></i>
          <i className="bi bi-box-arrow-in-right fs-3"></i>
        </div>
      </div>
    </nav>
  );
};
export default TopBar
