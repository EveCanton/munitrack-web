import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, FormGroup} from "react-bootstrap";
import './Login.css';
import logo from '../../assets/logoMuniTrack.png';

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
            <div className="login template d-flex justify-content-center align-items-center vh-100 " id="login-page">
                <div className='form_container p-5 rounded bg-white'>
                    <h3 className='text-center'>MuniTrack</h3>
                    <Form onSubmit={handleSubmit}>
                    <FormGroup className='mb-2'>
                        <Form.Control
                            className={errors.dni ? "border border-danger" : ""}
                            type="text"
                            placeholder="N° de Legajo o DNI"
                            value={dni}
                            onChange={handleChangeDni}
                            ref={dniRef}
                        />
                        {errors.email && (
                                <p className="text-danger mt-2">Debe completar el campo email</p>
                        )}
                    </FormGroup>
                    <FormGroup className='mb-2'>
                        <Form.Control
                            className={errors.password && "border border-danger"}
                            type="password"
                            placeholder="Ingresar Contraseña"
                            value={password}
                            onChange={handleChangePassword}
                            ref={passwordRef}
                        />
                        
                        {errors.password && (
                                <p className="text-danger mt-2">Debe completar el campo password</p>
                        )}
                    </FormGroup>
                    <div className='mb-2'>
                        <input type="checkbox" className='custom-control custom-checkbox' id='check'/>
                        <label htmlFor="check" className='custom-input-label ms-2'>
                            Recordarme
                        </label>
                    </div>
                    <div className='d-grid'>
                        <button id='buttonLogin' className='btn' type="submit" >Ingresar</button>
                    </div>
                    <p className='text-end mt-2'>
                        Olvide mi <a href="">Contraseña?<a Link to="/Operator" className='ms-2'>Registrarme</a></a>
                    </p>
                    </Form>
                </div>
                </div>

    );
};


export default Login;
