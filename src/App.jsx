import { useState } from "react";
import Translator from "./components/Translator";
import "./mimimi.css";

function App() {
  const [texto, setTexto] = useState("");

  return (
    <div className="wrapper__mimimi">
      <textarea
        onChange={(e) => setTexto(e.target.value)}
        value={texto}
      ></textarea>
      <Translator texto={texto} />
    </div>
  );
}

export default App;
