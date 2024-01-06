import { toast } from "react-toastify";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ValidateStoredToken, loginUser } from "../RequestServer/Customer";
import { did_login } from "../Redux/Slices/authSlice";
import { useDispatch } from "react-redux";

function Login(params) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [firstName, setFirstName] = useState("Default");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    if (email.length === "") {
      toast.error("Please enter email");
    } else if (password.length === "") {
      toast.error("Please enter password");
    } else {
      // call register api
      const response = await loginUser(email, password);
      // parse the response
      if (response != null) {
        console.log(
          response["data"]["user"],
          " : saving the entire user into redux slice"
        );
        dispatch(did_login(response["data"]["user"]));
        sessionStorage["token"] = response["data"]["token"];
        toast.success(
          `Welcome ${response["data"]["first_name"]} to store application`
        );
        navigate("/home");
      } else {
        toast.error("Invalid user name or password");
      }
    }
  };
  return (
    <div>
      <div
        className="form"
        style={{
          marginLeft: "5%",
          marginRight: "5%",
          maxWidth: "400px",
          padding: "20px",
        }}
      >
        <input
          type="text"
          className="form-control"
          placeholder="EMAIL"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="PASSWORD"
          className="form-control"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div className="mb-3">
          <div className="mb-3">Don't have an account? Then Register</div>
          <button onClick={handleLogin} className="btn btn-success">
            Login
          </button>
          {"   "}
          <button
            onClick={() => {
              navigate("/signup");
            }}
            className="btn btn-success"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
export default Login;
