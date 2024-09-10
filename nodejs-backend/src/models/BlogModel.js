//* Importamos la conexion de la DB
import db from "../config/connection.js";
//* Importamos Sequelize
import { DataTypes } from "sequelize";

const BlogModel = db.define(
  "computadoras",
  {
    nombre: { type: DataTypes.STRING },
    marca: { type: DataTypes.STRING },
    estado: { type: DataTypes.STRING },
    numSerie: { type: DataTypes.STRING },
    teclado: { type: DataTypes.STRING },
    mouse: { type: DataTypes.STRING },
  },
  {
    timestamps: false, //Desactiva el 'createdAt' y el 'updatedAt'
  }
);

export default BlogModel;
