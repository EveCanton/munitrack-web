const CitizenProfile = ({ ciudadano }) => {
  return (
    <div className="container mt-4">
      <div className="card shadow-sm rounded bg-white p-3">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0">Datos del Ciudadano</h5>
          <button className="btn btn-light btn-sm border">
            ✏️ Editar Datos
          </button>
        </div>

        <div className="row">
          <div className="col-md-6 mb-2">
            <strong>Nombre</strong>
            <div>{ciudadano.nombre}</div>
          </div>
          <div className="col-md-6 mb-2">
            <strong>Apellido</strong>
            <div>{ciudadano.apellido}</div>
          </div>
          <div className="col-md-6 mb-2">
            <strong>DNI</strong>
            <div>{ciudadano.dni}</div>
          </div>
          <div className="col-md-6 mb-2">
            <strong>Correo Electrónico</strong>
            <div>{ciudadano.correoElectronico}</div>
          </div>
          <div className="col-md-6 mb-2">
            <strong>Celular</strong>
            <div>{ciudadano.celular}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitizenProfile;
