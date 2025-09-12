import "./CreateCitizen.css";

const CreateCitizen = () => {
  return (
    <div className="vh-100 d-flex">
      {/* Columna izquierda */}
      <div className="col-4 d-flex flex-column justify-content-center align-items-center text-white bg-fondo p-5">
        <h2 className="fw-bold">MuniTrack</h2>
      </div>

      {/* Columna derecha */}
      <div className="col-8 d-flex align-items-center justify-content-center">
        <div className="p-4 bg-white rounded shadow-lg w-100">
          {/* Contenedor principal */}
          <h2 className="text-center mb-0 ml-0">Registrar ciudadano</h2>

          {/* CENTRAMOS inputs debajo del h2 */}
          <form className="d-flex flex-column align-items-center">
            <div className="col-6">
              <label htmlFor="inputNombre" className="form-label">
                Nombre
              </label>
              <input type="text" className="form-control mb-3" id="inputNombre" placeholder="Nombre" />

              <label htmlFor="inputApellido" className="form-label">
                Apellido
              </label>
              <input type="text" className="form-control mb-3" id="inputApellido" placeholder="Apellido" />

              <label htmlFor="inputDni" className="form-label">
                DNI
              </label>
              <input type="text" className="form-control mb-3" id="inputDni" placeholder="DNI" />

              <label htmlFor="inputMail" className="form-label">
                Mail
              </label>
              <input type="email" className="form-control mb-3" id="inputMail" placeholder="Mail" />

              <label htmlFor="inputDireccion" className="form-label">
                Dirección
              </label>
              <input type="text" className="form-control mb-3" id="inputDireccion" placeholder="Dirección" />

              <label htmlFor="inputCelular" className="form-label">
                Celular
              </label>
              <input type="tel" className="form-control mb-4" id="inputCelular" placeholder="Celular" />
            </div>

            {/* Botón centrado */}
            <button type="submit" className="btn btn-primary col-5" id="button-register">
              Registrar ciudadano
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCitizen;