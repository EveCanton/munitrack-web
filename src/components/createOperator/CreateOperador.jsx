import React from "react";

const CreateOperador = () => {
  return (
    <div className="bg-violet vh-100 d-flex align-items-center">
      <div className="container mt-5  ">
        <form class="row">
          <div class="container p-4 bg-white rounded shadow-lg">
            <h2 class="text-center mb-4">Registrar Operador</h2>
            <form class="row g-4">
              <div class="col-6">
                <label for="inputNombre" class="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNombre"
                  placeholder="Nombre"
                />
              </div>

              <div class="col-6">
                <label for="inputApellido" class="form-label">
                  Apellido
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputApellido"
                  placeholder="Apellido"
                />
              </div>

              <div class="col-6">
                <label for="inputDni" class="form-label">
                  DNI
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputDni"
                  placeholder="DNI"
                />
              </div>

              <div class="col-6">
                <label for="inputLegajo" class="form-label">
                  N° Legajo
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputLegajo"
                  placeholder="N° Legajo"
                />
              </div>

              <div class="col-8">
                <label for="inputMail" class="form-label">
                  Mail
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="inputMail"
                  placeholder="Mail"
                />
              </div>

              <div class="col-8">
                <label for="inputCelular" class="form-label">
                  Celular
                </label>
                <input
                  type="tel"
                  class="form-control"
                  id="inputCelular"
                  placeholder="Celular"
                />
              </div>

              <div class="col-12">
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

              <div class="col-12 d-grid">
                <button type="submit" class="btn btn-success">
                  Ingresar Operador
                </button>
              </div>
            </form>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateOperador;
