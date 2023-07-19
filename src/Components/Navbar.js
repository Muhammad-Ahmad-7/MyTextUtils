import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const changeColorGreen = () => {
    document.body.style.backgroundColor = "green";
    document.body.style.color = "white";
    document.getElementById("textArea").style.backgroundColor = "blue";
    Array.from(document.getElementsByClassName("btn")).forEach((element) => {
      element.style.backgroundColor = "green";
    });
  };
  const changeColorBlue = () => {
    document.body.style.backgroundColor = "blue";
    Array.from(document.getElementsByClassName("btn")).forEach((element) => {
      element.style.backgroundColor = "blue";
    });
  };
  const changeColorOrange = () => {
    document.body.style.backgroundColor = "orange";
    Array.from(document.getElementsByClassName("btn")).forEach((element) => {
      element.style.backgroundColor = "orange";
    });
  };
  const changeColorYellow = () => {
    document.body.style.backgroundColor = "yellow";
    Array.from(document.getElementsByClassName("btn")).forEach((element) => {
      element.style.backgroundColor = "yellow";
    });
  };
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="colorPaletes">
          <div
            className="green bg-green rounded-circle"
            onClick={changeColorGreen}></div>
          <div
            className="green blue bg-green rounded-circle"
            onClick={changeColorBlue}></div>
          <div
            className="green orange bg-green rounded-circle"
            onClick={changeColorOrange}></div>
          <div
            className="green yellow bg-green rounded-circle"
            onClick={changeColorYellow}></div>
        </div>
        <div
          className={`form-check form-switch text-${
            props.mode === "light" ? "dark" : "light"
          }`}>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            onClick={props.toggleMode}
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Enable {props.mode === "light" ? "Dark" : "Light"} Mode
          </label>
        </div>
      </div>
    </nav>
  );
}
