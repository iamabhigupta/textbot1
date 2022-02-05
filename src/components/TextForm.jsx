import React, { useState } from "react";
//
function TextForm(props) {
  const [text, setText] = useState();

  function handleUpClick() {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  }

  function handleLoClick() {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  }

  function handleOnChange(event) {
    setText(event.target.value);
  }

  function handleCapitalizedCase() {
    const newText = text
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
      .join(" ");
    setText(newText);
    props.showAlert("Converted to Capitalized Case", "success");
  }

  function eraseText() {
    setText((document.getElementById("myBox").value = ""));
    props.showAlert("Text reset", "success");
  }

  return (
    <div>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="my-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows={10}
            cols={80}
            placeholder="Enter text here"
            style={{
              backgroundColor: props.mode === "dark" ? "#160c21" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          />
        </div>
        <button
          type="button"
          className="btn btn-dark mx-2 my-2"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          type="button"
          className="btn btn-dark mx-2 my-2"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          type="button"
          className="btn btn-dark mx-2 my-2"
          onClick={handleCapitalizedCase}
        >
          Capitalized Case
        </button>
        <button
          type="button"
          className="btn btn-dark mx-2 my-2"
          onClick={eraseText}
        >
          Reset
        </button>
      </div>
      {/* <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div> */}
    </div>
  );
}

export default TextForm;
