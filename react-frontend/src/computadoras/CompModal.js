import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";

const CompModal = ({ show, handleClose, addCompu, updateCompu, editData }) => {
  const [nombre, setNombre] = useState("");
  const [marca, setMarca] = useState("");
  const [estado, setEstado] = useState("");
  const [numSerie, setNumSerie] = useState("");
  const [teclado, setTeclado] = useState("");
  const [mouse, setMouse] = useState("");

  useEffect(() => {
    if (editData) {
      setNombre(editData.nombre);
      setMarca(editData.marca);
      setEstado(editData.estado);
      setNumSerie(editData.numSerie);
      setTeclado(editData.teclado);
      setMouse(editData.mouse);
    } else {
      setNombre("");
      setMarca("");
      setEstado("");
      setNumSerie("");
      setTeclado("");
      setMouse("");
    }
  }, [editData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const compuData = { nombre, marca, estado, numSerie, teclado, mouse };

    if (editData) {
      compuData.id = editData.id;
      await updateCompu(compuData);
    } else {
      await addCompu(compuData);
    }

    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {editData ? "Editar computadora" : "Agregar computadora"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre de la PC</label>
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Marca</label>
            <input
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Estado</label>
            <input
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Num. Serie</label>
            <textarea
              value={numSerie}
              onChange={(e) => setNumSerie(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Teclado</label>
            <input
              value={teclado}
              onChange={(e) => setTeclado(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Mouse</label>
            <input
              value={mouse}
              onChange={(e) => setMouse(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <button
            onClick={handleClose}
            type="button"
            className="btn btn-outline-secondary m-1"
          >
            Cerrar
          </button>
          <button className="btn btn-outline-primary" type="submit">
            Guardar cambios
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default CompModal;
