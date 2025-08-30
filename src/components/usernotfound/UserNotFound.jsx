import React from "react";
import { Modal, Button } from "react-bootstrap";

const UserNotFound = ({ show = true, handleClose = () => {} }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="bg-violet text-white">
        <Modal.Title>Ciudadano no encontrado</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Parece que el ciudadano que buscas no existe en nuestros registros.
          Puedes ingresarlo para añadirlo al sistema.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="success">Ingresar nuevo ciudadano</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserNotFound;
