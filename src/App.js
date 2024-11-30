import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import MyPopup from "./components/MyPopup";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { jsPDF } from "jspdf";

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

  // Function for Download button
  const handleDownload = () => {
    const doc = new jsPDF();

    // Add heading
    doc.setTextColor(0, 0, 255); // Set text color to red (RGB)
    doc.setFontSize(22); // Set font size for the heading
    doc.setFont("helvetica", "bold"); // Use bold font
    doc.text("TextUtils", 105, 20, { align: "center" }); // Center align heading

    // Add underline to the heading
    doc.setDrawColor(0, 0, 0); // Black color
    doc.line(89, 22, 122, 22); // Draw a line (x1, y1, x2, y2)
    
    // Add content to the PDF
    doc.setFontSize(14); // Set font size for content
    doc.setFont("helvetica", "normal"); // Use normal font
    doc.setTextColor(0, 0, 0); // Set text color to red (RGB)
    const content = "Not deploying yet, budget is a bit tight, So SORRY!! You keep showing support like this, I will deploy soon :)";
    const lines = doc.splitTextToSize(content, 180); // Wrap text to fit within 180mm width
    doc.text(lines, 10, 40);
    
    // Add footer
    doc.setTextColor(255, 0, 0); // Set text color to red (RGB)
    doc.setFontSize(10); // Smaller font size for footer
    doc.setFont("helvetica", "italic"); // Italic style for footer
    doc.text(
      "Design and Maintained by Ayush Rathi",
      105, // Center align the footer
      290, // Place it near the bottom of an A4 page (297mm height)
      { align: "center" }
    );

    // Save the PDF
    doc.save("TextUtils-file.pdf");
  };

  return (
    <>
      <Router>
        <MyPopup recommendation="TextUtils is amazing. Download the app now!!" handleDownload={handleDownload} />
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
