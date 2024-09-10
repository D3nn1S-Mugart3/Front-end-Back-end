import React, { useState, useEffect } from "react";
import axios from "axios";
import CompModal from "./CompModal";

const URI = "http://localhost:8000/computer/";

const CompsShowCompu = () => {
  const [blogs, setBlog] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    getCompu();
  }, []);

  const getCompu = async () => {
    const res = await axios.get(URI);
    setBlog(res.data);
  };

  const addCompu = async (newCompu) => {
    const res = await axios.post(URI, newCompu);
    setBlog([...blogs, res.data]);
  };

  const updateCompu = async (updatedCompu) => {
    await axios.put(`${URI}${updatedCompu.id}`, updatedCompu);
    setBlog(
      blogs.map((blog) => (blog.id === updatedCompu.id ? updatedCompu : blog))
    );
  };

  const deleteCompu = async (id) => {
    await axios.delete(`${URI}${id}`);
    getCompu();
  };

  const handleModalShow = (data = null) => {
    setEditData(data);
    setModalShow(true);
  };

  const handleModalClose = () => {
    setModalShow(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <button
            onClick={() => handleModalShow()}
            className="btn btn-primary mt-2 mb-2"
          >
            <i className="fas fa-plus"> Agregar nueva computadora</i>
          </button>
          <table className="table">
            <thead className="table-primary">
              <tr>
                <th>Nombre de la PC</th>
                <th>Marca</th>
                <th>Estado</th>
                <th>Num. serie</th>
                <th>Teclado</th>
                <th>Mouse</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id}>
                  <td> {blog.nombre} </td>
                  <td> {blog.marca} </td>
                  <td> {blog.estado} </td>
                  <td> {blog.numSerie} </td>
                  <td> {blog.teclado} </td>
                  <td> {blog.mouse} </td>
                  <td>
                    <button
                      onClick={() => handleModalShow(blog)}
                      className="btn btn-info m-1"
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                    <button
                      onClick={() => deleteCompu(blog.id)}
                      className="btn btn-danger"
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <CompModal
            show={modalShow}
            handleClose={handleModalClose}
            addCompu={addCompu}
            updateCompu={updateCompu}
            editData={editData}
          />
        </div>
      </div>
    </div>
  );
};

export default CompsShowCompu;
