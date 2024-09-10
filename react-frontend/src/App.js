//* Importamos los componentes
import CompsShowCompu from "./computadoras/ShowCompu";
import CompCreateCompu from "./computadoras/CreateCompu";
import CompEditCompu from "./computadoras/EditCompu";

//* Importamos el router
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa Bootstrap CSS

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CompsShowCompu />} />
          <Route path="/create" element={<CompCreateCompu />} />
          <Route path="/edit/:id" element={<CompEditCompu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
