import "./CreateOperator.css";

const CreateOperator = () => {
  return (
    <div className="vh-100 d-flex">
      <div className="col-4 d-flex flex-column justify-content-center align-items-center text-white bg-fondo p-5">
        <h2 className="fw-bold">MuniTrack</h2>
      </div>
      <div className="col-8 d-flex align-items-center justify-content-center">
        <div className="p-4 bg-white rounded shadow-lg w-100">
          <h2 className="text-center mb-0 ml-0">Registrar Operador</h2>
          <form className="d-flex flex-column align-items-center">
            <div className="col-6">
              <label htmlFor="inputNombre" className="form-label">
                Nombre
              </label>
              <input type="text" className="form-control mb-1" id="inputNombre" placeholder="Nombre" />

              <label htmlFor="inputApellido" className="form-label">
                Apellido
              </label>
              <input type="text" className="form-control mb-1" id="inputApellido" placeholder="Apellido" />

              <label htmlFor="inputDni" className="form-label">
                DNI
              </label>
              <input type="text" className="form-control mb-1" id="inputDni" placeholder="DNI" />

              <label htmlFor="inpuNDeLegajo" className="form-label">
                N° de Legajo
              </label>
              <input type="text" className="form-control mb-1" id="inputNDeLegajo" placeholder="N° de Legajo" />

              <label htmlFor="inputMail" className="form-label">
                Mail
              </label>
              <input type="email" className="form-control mb-1" id="inputMail" placeholder="Mail" />

              <label htmlFor="inputCelular" className="form-label">
                Celular
              </label>
              <input type="tel" className="form-control mb-1" id="inputCelular" placeholder="Celular" />
              <label for="inputCargo" class="form-label">
                  Cargo
                </label>
                <select id="inputCargo" class="form-select">
                  <option selected disabled>
                    Seleccione un cargo
                  </option>
                  <option value="1">Operador</option>
                  <option value="2">Supervisor</option>
                  <option value="3">Administrador</option>
                </select>
            
            </div>
            <button type="submit" className="btn btn-primary col-5 mt-4" id="button-register">
              Registrar Operador
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateOperator;
