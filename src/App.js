import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Login from "./components/login";
import NavigationBar01 from "./components/NavBar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import BackTest from "./components/BacktestPage";
import Str3Min from "./components/Str3Min";
import BTvumanchu from "./components/Backtesting/VuManChu";
import Str30kto3cr from "./components/Backtesting/Str30kto3cr";
import Home from "./components/CopyTrading/Home";
import Registration from "./components/CopyTrading/Registration";
import Comp1 from "./ForTesting/Comp1";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <NavigationBar01 />
      <Routes>
        <Route Component={HomePage} path="/" />
        <Route Component={HomePage} path="/home" />
        <Route Component={Login} path="/login" />
        <Route Component={Str3Min} path="/3minStr" />
        {/* // Backtesting Logic */}
        <Route Component={BackTest} path="/bt" />
        <Route Component={BTvumanchu} path="/btvumanchu" />
        <Route Component={Str30kto3cr} path="/btstr30kto3cr" />
        {/*/// Copytrading components*/}
        <Route Component={Home} path="/copytrading" />
        Registration
        <Route Component={Registration} path="/copy-trading-registration" />
        <Route Component={Comp1} path="/test" />
        <Route Component={Profile} path="/profile" />
        <Route Component={SignUp} path="/signup" />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
