import express from "express";
import cors from "cors";
//* Importamos la conexion db
import db from "./src/config/connection.js";
//* Importamos nuestro eruptador
import blogRoutes from "./src/routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/computer", blogRoutes);

try {
  await db.authenticate();
  console.log("Conexión exitosa a la DB");
  await db.sync();
} catch (error) {
  console.log(`El error de la conexión es:${error}`);
}

app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

app.listen(8000, () => {
  console.log("🚀 Servidor corriendo en el puerto http://localhost:8000/");
});
