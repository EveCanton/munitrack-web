import "./CitizenDetails.css";

const CitizenIncidents = ({ ciudadano }) => {
  return (
    <div className="container mt-4">
      <div className="card shadow rounded bg-white">
        <div className="card-body">
          <h3 className="card-title mb-3">Lista de Incidencias</h3>
          <div className="table-responsive">
            <table className="table table-striped table-bordered mb-0">
              <thead className="table-primary">
                <tr>
                  <th>Fecha de Ingreso</th>
                  <th>Tipo de Incidencia</th>
                  <th>Estado de Incidencia</th>
                  <th>Observación</th>
                  <th>Área</th>
                  <th>Operador a cargo</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {ciudadano.incidencias.map((incidence) => (
                  <tr key={incidence.id}>
                    <td>{incidence.fechaIngreso}</td>
                    <td>{incidence.tipo}</td>
                    <td className="text-center">
                      <button
                        className={`btn btn-sm rounded-pill ${
                          incidence.estado === "Started"
                            ? "btn-warning"
                            : incidence.estado === "InProgress"
                            ? "btn-primary"
                            : "btn-success"
                        }`}
                      >
                        {incidence.estado === "Started"
                          ? "Empezado"
                          : incidence.estado === "InProgress"
                          ? "En proceso"
                          : "Finalizado"}
                      </button>
                    </td>
                    <td>{incidence.observacion}</td>
                    <td>{incidence.area}</td>
                    <td>{incidence.operador}</td>
                    <td>{incidence.acciones}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end mt-3 mb-3">
        <button className="btn btn-success">
          <i class="bi bi-plus-circle-fill"></i> Agregar Incidencia
        </button>
      </div>
    </div>
  );
};

export default CitizenIncidents;
