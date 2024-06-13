import { useState } from "react";
import "./App.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
function App() {
  const [isLoginActive, setIsLoginActive] = useState(false);

  function handleIsLoginActive(val) {
    setIsLoginActive(val);
  }
  return (
    <div className="App">
      {isLoginActive ? <Login isLoginActive={isLoginActive} /> : <Signup />}
    </div>
  );
}

export default App;
