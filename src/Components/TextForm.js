import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [countVowel, setCountVowel] = useState(0);
  const [countConsonant, setCountConsonant] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const convertToUp = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };
  const convertToLow = (event) => {
    let Lowercase = text.toLowerCase();
    setText(Lowercase);
    props.showAlert("Converted to LowerCase", "success");
  };
  let countNumberOfVowel = 0,
    countNumberOfConsonants = 0;
  const onChange = (event) => {
    setText(event.target.value);
    if (event.target.value === "" || event.target.value === " ") {
      setWordCount(0);
      setCountVowel(0);
    } else if (event.target.value.length === 1) {
      setWordCount(1);
    } else {
      setWordCount(
        text.split(/\s+/).filter((element) => {
          return element.length !== 0;
        }).length
      );
      Array.from(text).forEach((element) => {
        switch (element) {
          case " ":
            break;
          case "a":
          case "A":
          case "e":
          case "E":
          case "i":
          case "I":
          case "o":
          case "O":
          case "u":
          case "U":
            countNumberOfVowel++;
            break;
          default:
            countNumberOfConsonants++;
            break;
        }
      });
      setCountVowel(countNumberOfVowel);
      setCountConsonant(countNumberOfConsonants);
      setSentenceCount(text.split(".").length);
    }
  };
  const onPaste = (event) => {
    const pastedText = event.clipboardData.getData("text");
    Array.from(pastedText).forEach((element) => {
      switch (element) {
        case " ":
          break;
        case "a":
        case "A":
        case "e":
        case "E":
        case "i":
        case "I":
        case "o":
        case "O":
        case "u":
        case "U":
          countNumberOfVowel++;
          break;
        default:
          countNumberOfConsonants++;
          break;
      }
      setSentenceCount(text.split(".").length);
    });
    setTimeout(() => {
      setWordCount(
        pastedText.split(/\s+/).filter((element) => {
          return element.length !== 0;
        }).length
      );
      setCountVowel(countNumberOfVowel);
      setCountConsonant(countNumberOfConsonants);
    }, 500);
    console.log(pastedText.split(" ").length);
  };
  const clearText = () => {
    setText("");
    setWordCount(0);
    setCountVowel(0);
    setCountConsonant(0);
    setSentenceCount(0);
  };
  const handleCopy = () => {
    const copyText = document.getElementById("textArea").value;
    console.log(copyText);
    navigator.clipboard.writeText(copyText);
    props.showAlert("Copy To Clipboard", "success");
  };
  return (
    <div className="my-5 p-2">
      <h1>{props.heading}</h1>
      <textarea
        className={`textArea bg-${props.mode} text-${
          props.mode === "dark" ? "white" : "black"
        }`}
        id="textArea"
        rows="10"
        value={text}
        onChange={onChange}
        onPaste={onPaste}></textarea>
      <button
        className="btn btn-success mx-3 my-3"
        onClick={convertToUp}
        id="btn1">
        Convert To UpperCase
      </button>
      <button className="btn btn-success mx-3 my-3" onClick={convertToLow}>
        Convert To Lowercase
      </button>
      <button className="btn btn-success mx-3 my-3" onClick={clearText}>
        Clear
      </button>
      <button className="btn btn-success mx-3 my-3" onClick={handleCopy}>
        Click to Copy
      </button>
      <h2>Text Summary</h2>
      <p>Word Count: {wordCount}</p>
      <p>Character Count: {text.length}</p>
      <p>Number of Vowels: {countVowel}</p>
      <p>Number of Consonats: {countConsonant}</p>
      <p>Number of Sentence: {sentenceCount}</p>
      <h2>Text Preview</h2>
      <p>{text}</p>
    </div>
  );
}
