import React, { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const URI = "http://localhost:8000/computer/";

const CompEditCompu = () => {
  const [nombre, setNombre] = useState("");
  const [marca, setMarca] = useState("");
  const [estado, setEstado] = useState("");
  const [numSerie, setNumSerie] = useState("");
  const [teclado, setTeclado] = useState("");
  const [mouse, setMouse] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const getBlogById = useCallback(async () => {
    const res = await axios.get(URI + id);
    setNombre(res.data.nombre);
    setMarca(res.data.marca);
    setEstado(res.data.estado);
    setNumSerie(res.data.numSerie);
    setTeclado(res.data.teclado);
    setMouse(res.data.mouse);
  }, [id]);

  useEffect(() => {
    getBlogById();
  }, [getBlogById]);

  const update = async (e) => {
    e.preventDefault();
    await axios.put(URI + id, {
      nombre,
      marca,
      estado,
      numSerie,
      teclado,
      mouse,
    });
    navigate("/");
  };

  return (
    <div>
      <h3>Edit POST</h3>
      <form onSubmit={update}>
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
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default CompEditCompu;
