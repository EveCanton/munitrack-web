import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup } from "react-bootstrap";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [nLegajo, setNLegajo] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    nLegajo: false,
    password: false,
  })
  const operadores = [
    { nLegajo: 1111, password: "admin", nombre: "Evelyn" },
    { nLegajo: 1002, password: "admin123", nombre: "Luis" },
    { nLegajo: 1003, password: "soporte456", nombre: "Ana" },
  ];

  const nLegajoRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();

  const handleChangeNlegajo = (event) => {
    setNLegajo(event.target.value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      nLegajo: false,
    }))
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      password: false,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!nLegajo) {
      alert("Debe ingresar su N° de Legajo.");
      nLegajoRef.current.focus();
      setErrors((prevErrors) => ({
        ...prevErrors,
        nLegajo: true,
      }));
      return;
    }

    if (!password) {
      alert("Debe ingresar un password.");
      passwordRef.current.focus();
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: true,
      }));
      return;
      
    }
    const operador = operadores.find(
    (op) => op.nLegajo.toString() === nLegajo && op.password === password
    );
    if (!operador) {
      setErrors((prev) => ({ ...prev, credentials: true }));
      return;
    }

    onLogin();
    navigate("/citizenSearch");
   } 
    
    const handleRegisterClick = () => {
      navigate("/operators/new")
    } 
    const handleForgotPassword = () =>{
      navigate("/ForgotPassword")
    }
    

  return (
    <div
      className="login template d-flex justify-content-center align-items-center vh-100 bg-violet"
      id="login-page"
    >
      <div className="form_container p-5 rounded bg-white">
        <h3 className="text-center">MuniTrack</h3>
        <Form onSubmit={handleSubmit}>
          <FormGroup className="mb-2">
            <Form.Control
              className={errors.nLegajo ? "border border-danger" : ""}
              type="text"
              placeholder="N° de Legajo"
              value={nLegajo}
              onChange={handleChangeNlegajo}
              ref={nLegajoRef}
            />
            {errors.email && (
              <p className="text-danger mt-2">Debe completar el campo email</p>
            )}
          </FormGroup>
          <FormGroup className="mb-2">
            <Form.Control
              className={errors.password && "border border-danger"}
              type="password"
              placeholder="Ingresar Contraseña"
              value={password}
              onChange={handleChangePassword}
              ref={passwordRef}
            />

            {errors.password && (
              <p className="text-danger mt-2">
                Debe completar el campo password
              </p>
            )}
          </FormGroup>
          <div className="mb-2">
            <input
              type="checkbox"
              className="custom-control custom-checkbox"
              id="check"
            />
            <label htmlFor="check" className="custom-input-label ms-2">
              Recordarme
            </label>
          </div>
          <div className="d-grid">
            <button className="btn text-white" id="button-ingresar" type="submit">
              Ingresar
            </button>
          </div>
          <p className="text-end mt-2">
              <button className="ms-2" id="link-style" onClick={handleForgotPassword}>Olvide mi Contraseña </button>

          </p>
        </Form>
      </div>
    </div>
  );
};

export default Login;
