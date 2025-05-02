import "./App.css";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import { Home } from "./Pages/Home";
import { Rentas } from "./Pages/Rentas/Rentas";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rentas" element={<Rentas/>} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
