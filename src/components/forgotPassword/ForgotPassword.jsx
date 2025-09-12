import { Form, FormGroup } from "react-bootstrap";

const ForgotPassword = () => {
  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg-violet"
      id="login-page">
        <div className="form_container p-5 rounded bg-white text-center" >
      <h3>¿Has olvidado tu contraseña?</h3>
      <p>Ingresa tu correo electrónico para reestablecerla</p>
      <Form className="mt-2">
        <FormGroup className="mb-2">
            <Form.Control
              type="text"
              placeholder="ejemplo@dominio.com"
            />
          </FormGroup>
        <button className="btn bg btn-success mt-3" type="submit">
              Reestablecer Contraseña
            </button>
      </Form>
      </div>
    </div>
  )
}

export default ForgotPassword
