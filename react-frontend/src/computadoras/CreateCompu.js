import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = "http://localhost:8000/computer/";

const CompCreateCompu = () => {
  const [nombre, setNombre] = useState("");
  const [marca, setMarca] = useState("");
  const [estado, setEstado] = useState("");
  const [numSerie, setNumSerie] = useState("");
  const [teclado, setTeclado] = useState("");
  const [mouse, setMouse] = useState("");
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
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
    <div className="container">
      <div className="row">
        <div className="cold">
          <h3>Añadir Computadora</h3>
          <form onSubmit={store}>
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
              Crear
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompCreateCompu;
