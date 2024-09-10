//*Importamos el Modelo
import BlogModel from "../models/BlogModel.js";

//? Metodos para el CRUD

//* Mostrar todos los registros

export const getAllComputer = async (req, res) => {
  try {
    const computadoras = await BlogModel.findAll();
    res.json(computadoras);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//* Mostrar un registro
export const getComputer = async (req, res) => {
  try {
    const computadoras = await BlogModel.findAll({
      where: { id: req.params.id },
    });
    res.json(computadoras[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//? Crear un registro

export const createComputer = async (req, res) => {
  try {
    await BlogModel.create(req.body);
    res.json({
      message: "¡Registro creado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//TODO: Actualizar registro
export const updateComputer = async (req, res) => {
  try {
    await BlogModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "¡Registro actualizado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//! Eliminar un registro
export const deleteComputer = async (req, res) => {
  try {
    await BlogModel.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: "¡Se a eliminado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
