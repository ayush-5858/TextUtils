import React, { useState } from "react";

export default function TextForm(props) {
  // States of Component
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  // Functions
  const handleOnChangeInput = (event) => {
    setInputText(event.target.value);
    setOutputText(
      `${inputText.split(" ").length} Words and ${
        inputText.length + 1
      } Characters.\n${(0.008 * inputText.split(" ").length).toFixed(
        2
      )} Minutes to read.`
    );
  };
  const handleOnChangeOutput = () => {
    return null;
  };
  const validateInput = (input, showAlert) => {
    if (input.trim().length === 0) {
      showAlert('Please enter something in the input!', 'warning');
      return false; // Input is invalid
    }
    return true; // Input is valid
  };

  const handleUpClick = () => {
    if (!validateInput(inputText, props.showAlert)) return;
    let UpperText = inputText.toUpperCase();
    setOutputText(UpperText);
    props.showAlert('Text has been successfully uppercased.', 'success')
  };
  const handleLoClick = () => {
    if (!validateInput(inputText, props.showAlert)) return;
    let LowerText = inputText.toLowerCase();
    setOutputText(LowerText);
    props.showAlert('Text has been successfully lowercased.', 'success')
  };
  const handleLengthClick = () => {
    if (!validateInput(inputText, props.showAlert)) return;
    let LengthOfText = inputText.length;
    setOutputText(`Lenght of the String is ${LengthOfText}`);
    props.showAlert('Text length has been measured successfully.', 'success')
  };
  const handleTrimClick = () => {
    if (!validateInput(inputText, props.showAlert)) return;
    // Regular Expression concept in JS is used
    let extraSpace = inputText.split(/[ ]+/);
    setOutputText(extraSpace.join(" ").trim());
    props.showAlert('Extra spaces have been successfully removed from the text.', 'success')
  };
  const handleClearClick = () => {
    if (!validateInput(inputText, props.showAlert) && outputText.length === 0){
      return;
    }
    else{
    let inputtext = ""
    setOutputText(inputtext);
    setInputText(inputtext);
    props.showAlert('The text has been cleared successfully.', 'success')
    }
  };
  const handleCopyClick = () => {
    if (!validateInput(inputText, props.showAlert)) return;
    navigator.clipboard
      .writeText(outputText)
      .then(() => {
        props.showAlert('The text has been copied successfully.', 'success')
      })
      .catch((err) => {
        props.showAlert('Fail to copy text.', 'warning')
        console.error("Fail to copy text: ", err);
      });

    // Or We can do
    // var text = document.getElementById('exampleFormControlTextarea2');
    // text.select();
    // navigator.clipboard.writeText(text.value);
  };
  const handleEmailExtractClick = () => {
    if (!validateInput(inputText, props.showAlert)) return;
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const extractedEmails = inputText.match(emailRegex);
    if (!extractedEmails) {
      setOutputText("No Email Found");
      props.showAlert('No Email is found in this text.', 'warning')
    } else {
      setOutputText(extractedEmails.join(", "));
      props.showAlert('Email is found successfully in this text.', 'success')
    }
  };
  const handlePhoneExtractClick = () => {
    if (!validateInput(inputText, props.showAlert)) return;
    const phoneRegex = /\b\d{10}\b/g;
    const extractedNumbers = inputText.match(phoneRegex);
    if (!extractedNumbers) {
      setOutputText("No Phone No. Found");
      props.showAlert('No phone number is found in this text.', 'warning')
    } else {
      setOutputText(extractedNumbers.join(", "));
      props.showAlert('Phone number is found successfully in this text.', 'success')
    }
  };
  return (
    <>
      <div className="container my-3" style={{color: props.mode === "light" ? "black" : "white"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3 row">
          <textarea
            className={`form-control ${props.mode === "light" ? "custom-placeholder-light" : "custom-placeholder-dark"}`}
            id="exampleFormControlTextarea1"
            rows="16"
            autoFocus
            placeholder="Enter text here..."
            value={inputText}
            onChange={handleOnChangeInput}
            style={{
              width: "49%",
              marginRight: "20px",
              backgroundColor: props.mode === "dark" ? "#3c6383" : "white",
              color: props.mode === "light" ? "black" : "white"
            }}
          ></textarea>
          <textarea
            className={`form-control ${props.mode === "light" ? "custom-placeholder-light" : "custom-placeholder-dark"}`}
            id="exampleFormControlTextarea2"
            rows="16"
            placeholder="Output appears here..."
            value={outputText}
            onChange={handleOnChangeOutput}
            style={{
              width: "49%",
              backgroundColor: props.mode === "dark" ? "#3c6383" : "white",
              color: props.mode === "light" ? "black" : "white"
            }}
          ></textarea>
        </div>
        <div className="mx-auto">
          <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
            Convert to UpperCase
          </button>
          <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
            Convert to LowerCase
          </button>
          <button
            className="btn btn-primary mx-2 my-1"
            onClick={handleLengthClick}
          >
            Length of String
          </button>
          <button
            className="btn btn-primary mx-2 my-1"
            onClick={handleTrimClick}
          >
            Remove Extra Space
          </button>
          <button
            className="btn btn-primary mx-2 my-1"
            onClick={handleEmailExtractClick}
          >
            Email Extractor
          </button>
          <button
            className="btn btn-primary mx-2 my-1"
            onClick={handlePhoneExtractClick}
          >
            Phone No. Extractor
          </button>
          <button
            className="btn btn-primary mx-2 my-1"
            onClick={handleCopyClick}
          >
            Copy Text
          </button>
          <button
            className="btn btn-primary mx-2 my-1"
            onClick={handleClearClick}
          >
            Clear Text
          </button>
        </div>
      </div>
    </>
  );
}