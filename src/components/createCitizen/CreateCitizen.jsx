import React from "react";

const CreateCitizen = () => {
  return (
    <div className="container mt-5">
      <form class="row">
        <div class="container p-4 bg-white rounded shadow-lg">
          <h2 class="text-center mb-4">Registrar ciudadano</h2>
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
              <label for="inputMail" class="form-label">
                Direccion
              </label>
              <input
                type="email"
                class="form-control"
                id="inputDireccion"
                placeholder="Direccion"
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

            <div class="col-12 d-grid">
              <button type="submit" class="btn btn-success">
                Ingresar Operador
              </button>
            </div>
          </form>
        </div>
      </form>
    </div>
  );
};

export default CreateCitizen;
