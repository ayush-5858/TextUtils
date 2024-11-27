import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import MyPopup from "./components/MyPopup";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [darkMode, SetDarkMode] = useState("light");
  const [modeText, SetModeText] = useState("Dark");
  const [alert, SetAlert] = useState(null);

  const showAlert = (message, type) => {
    SetAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      SetAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (darkMode === "light") {
      SetDarkMode("dark");
      SetModeText("Light");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      SetDarkMode("light");
      SetModeText("Dark");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  setInterval(() => {
    document.title = "TextUtils is Amazing";
  }, 2000);
  setInterval(() => {
    document.title = "Install TextUtils Now";
  }, 1500);

  return (
    <>
      <Router>
        <MyPopup recommendation="TextUtils is amazing. Download the app now!!" />
        <Navbar
          title="TextUtils"
          mode={darkMode}
          modeText={modeText}
          toggleMode={toggleMode}
          showAlert={showAlert}
        />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About mode={darkMode} />} />
          <Route
            exact path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter the text below to analyze TextUtils"
                mode={darkMode}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
