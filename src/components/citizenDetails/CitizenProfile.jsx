import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";

const CitizenProfile = ({ ciudadano }) => {

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    nombre: ciudadano.nombre,
    apellido: ciudadano.apellido,
    dni: ciudadano.dni,
    correoElectronico: ciudadano.correoElectronico,
    celular: ciudadano.celular
    });

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleSave = () => {
      console.log("Datos actualizados:", formData);
      handleClose();
      //llamar al backend para actualizar los datos
    };


  return (
    <div className="container mt-2 ">
      <div className="card shadow-sm rounded bg-white p-3">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0">Datos del Ciudadano</h5>
          <button className="btn btn-light btn-sm border" onClick={handleShow}>
             <i class="bi bi-pencil-fill"></i> Editar Datos
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

      <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Datos del Ciudadano</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-2">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
          />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              value={formData.apellido}
              onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>DNI</Form.Label>
            <Form.Control
              type="text"
              value={formData.dni}
              onChange={(e) => setFormData({ ...formData, dni: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control
              type="email"
              value={formData.correoElectronico}
              onChange={(e) => setFormData({ ...formData, correoElectronico: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Celular</Form.Label>
            <Form.Control
              type="text"
              value={formData.celular}
              onChange={(e) => setFormData({ ...formData, celular: e.target.value })}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="success" onClick={handleSave}>
          Guardar
        </Button>
      </Modal.Footer>
  </Modal>

    </div>


      
      
  );
};

export default CitizenProfile;
