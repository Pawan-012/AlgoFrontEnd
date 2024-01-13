import { useState } from "react";
import { useNavigate } from "react-router-dom";
function ContactUs() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  return (
    <div style={{ border: "1px", display: "inline-flex" }}>
      {/**Form heading */}

      {/**Form */}
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
          <div style={{ margin: "5px" }}>
            <input
              type="text"
              className="form-control"
              placeholder="EMAIL"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div style={{ margin: "5px" }}>
            <input
              type="text"
              className="form-control"
              placeholder="MOBILE"
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />
          </div>

          <div className="mb-3">
            <center>
              <button className="btn btn-success">SUBMIT</button>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactUs;
