import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function SignUp(params) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const [passwordTypeState, setPasswordTypeState] = useState("password");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <center style={{ margin: "10px" }}>
      <div className="form" style={{ maxWidth: "400px" }}>
        <input
          type="text"
          className="form-control"
          placeholder="EMAIL"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          type={passwordTypeState}
          className="form-control"
          placeholder="PASSWORD"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div
          style={{ margin: "3px" }}
          onClick={() => {
            if (passwordTypeState == "text") {
              setPasswordTypeState("password");
            } else {
              setPasswordTypeState("text");
            }
          }}
        >
          EYE
        </div>
        {/* first Name */}
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="FIRST NAME"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        {/* last Name */}
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="LAST NAME"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        {/* mobile */}
        <div className="mb-3">
          <input
            type="number"
            min={999999999}
            className="form-control"
            placeholder="MOBILE NO"
            onChange={(e) => {
              setMobile(e.target.value);
            }}
          />
        </div>
        {/* dob */}
        <center>DOB</center>
        <div className="mb-3">
          <input
            type="date"
            className="form-control"
            placeholder="DOB"
            onChange={(e) => {
              setDob(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <button onClick={() => {}} className="btn btn-success">
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
    </center>
  );
}
export default SignUp;
