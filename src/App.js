import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import About from "./Components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      Type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#06070ed9";
      document.body.style.color = "white";
      showAlert("Dark Mode has been Enabled", "success");
      Array.from(document.getElementsByClassName("btn")).forEach((element) => {
        element.style.backgroundColor = "#06070ed9";
      });
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode has been Enabled", "success");
      Array.from(document.getElementsByClassName("btn")).forEach((element) => {
        element.style.backgroundColor = "#06070ed9";
      });
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          about="About TextUtils"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <div className="container">
              <TextForm
                heading="Enter Text Here"
                mode={mode}
                showAlert={showAlert}
              />
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
