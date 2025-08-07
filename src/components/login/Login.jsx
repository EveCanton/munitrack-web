import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Col, Form, FormGroup, Row } from "react-bootstrap";
import './Login.css';

const Login = ({onLogin}) => {
    const [dni, setDni] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        dni: false,
        password: false,
    })

    const dniRef = useRef(null);
    const passwordRef = useRef(null);

    const navigate = useNavigate();

    const handleChangeDni = (event) => {
        setDni(event.target.value);
        setErrors(prevErrors => ({
            ...prevErrors,
            dni: false,
        }))

    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
        setErrors(prevErrors => ({
            ...prevErrors,
            password: false,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!dni) {
            alert("Debe ingresar un dni.");
            dniRef.current.focus();
            setErrors(prevErrors => ({
                ...prevErrors,
                dni: true,
            }))
            return;
        }

        if (!password) {
            alert("Debe ingresar un password.");
            passwordRef.current.focus();
            setErrors(prevErrors => ({
                ...prevErrors,
                password: true,
            }))
            return;
        }

        onLogin();
        navigate("/citizenSearch")
    }
  
        return (
            <div className="login-container">
                <div className="login-left"></div>
                <div className="login-right">
                    <h1 className="login-title">MuniTrack</h1>
                    <Form className="login-form" onSubmit={handleSubmit}>
                    <Form.Control
                        type="text"
                        placeholder="N° de Legajo o DNI"
                        value={dni}
                        onChange={handleChangeDni}
                    />
                    <Form.Control
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={handleChangePassword}
                    />
                    <div className="login-links">
                        <span>¿Olvidaste tu contraseña?</span>
                        <span>Registrarse</span>
                    </div>
                    <button type="submit" className="login-button">Ingresar</button>
                    </Form>
                </div>
                </div>

    );
};


export default Login;
