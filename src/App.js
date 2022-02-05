import React, { useState } from "react";
import Alerts from "./components/Alerts";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  function showAlert(message, type) {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  function toggleMode() {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#160c21";
      showAlert("Dark mode is enabled", "success");
    }
  }

  return (
    <div>
      <Navbar
        title="Textbot"
        aboutText="About Textbot"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alerts alert={alert} />
      <div className="container my-3" style={{ width: "1000px" }}>
        <TextForm
          heading="Enter the Text to Analyze below"
          mode={mode}
          showAlert={showAlert}
        />
      </div>
      {/* <div className="container">
        <About />
      </div> */}
    </div>
  );
}

export default App;
