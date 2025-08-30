
import './CreateIncidence.css';
 
const CreateIncidence = () => {
  return (
    <div className="container mt-4">
    <div className="card shadow-sm rounded bg-white p-4">
      <h3 className="mb-4">Nueva Incidencia</h3>

      <div className="container">
        {/* Primera fila */}
        <div className="row mb-3">
          <div className="col-md-4">
            <label htmlFor="date" className="form-label">Fecha de Ingreso</label>
            <input type="date" className="form-control" id="date" />
          </div>
          <div className="col-md-4">
            <label htmlFor="incidenceType" className="form-label">Tipo de Incidencia</label>
            <select className="form-select" id="incidenceType">
              <option selected>Seleccionar tipo</option>
              <option value="1">Chapas</option>
              <option value="2">Bolsón</option>
              <option value="3">Reclamo</option>
              <option value="4">Licencia de Conducir</option>
              <option value="5">Trámite</option>
              <option value="6">Otro</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="incidenceState" className="form-label">Estado de Incidencia</label>
            <select className="form-select" id="incidenceState">
              <option selected>Seleccionar estado</option>
              <option value="1">Iniciado</option>
              <option value="2">En progreso</option>
              <option value="3">Finalizado</option>
            </select>
          </div>
        </div>

        {/* Segunda fila */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="area" className="form-label">Área</label>
            <select className="form-select" id="area">
              <option selected>Seleccionar área</option>
              <option value="1">Género</option>
              <option value="2">Mesa de Trabajo</option>
              <option value="3">Básica Centro</option>
              <option value="4">Básica Martín Fierro</option>
              <option value="5">Desarrollo</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="operator" className="form-label">Operador a Cargo</label>
            <select className="form-select" id="operator">
              <option selected>Seleccionar operador</option>
              <option value="1">Luciana</option>
              <option value="2">Evelyn</option>
              <option value="3">Álvaro</option>
            </select>
          </div>
        </div>

        {/* Observación */}
        <div className="mb-3">
          <label htmlFor="observation" className="form-label">Observación</label>
          <textarea
            className="form-control"
            id="observation"
            rows="4"
            placeholder="Describa la incidencia en detalle..."
          ></textarea>
        </div>

        {/* Botones */}
        <div className="d-flex justify-content-end gap-2 mt-4">
          <button className="btn btn-outline-secondary">Cancelar</button>
          <button className="btn btn-primary" id='styleButton'>Guardar Incidencia</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CreateIncidence

