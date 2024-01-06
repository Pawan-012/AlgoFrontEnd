import Button from "react-bootstrap/Button";
import { useState } from "react";
import "./registration.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import React from "react";
import { RegisterCPY } from "./Services";
import AccountTestingResult from "./AccountTestingRes";
function Registration() {
  //button states
  const [btnVariant, setBtnVariant] = useState("primary");
  const [btnVariantSbt, setBtnVariantSbt] = useState("primary");
  const [btnVariantTest, setBtnVariantTest] = useState("warning");
  const [textColor, setTextColor] = useState("black");
  //form content credentials
  const [selectedBrok, setSelectedBrok] = useState("Choose Broker");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isTested, setIstested] = useState(false);
  const [clientId, setClientId] = useState("");
  const [password, setPassword] = useState("");
  const [apikey, setApikey] = useState("");
  const [totpKey, setTotpKey] = useState("");
  const [imei, setImei] = useState("abc1234");
  const [isImei, setIsImei] = useState(false);

  const handleSelect = (item) => {
    setSelectedBrok(item);
    if (item === "Finvasia") {
      setIsImei(true);
    } else {
      setIsImei(false);
    }
    setTextColor("green");
    setBtnVariant("success");
    console.log(item);
    toast.success("Broker Selected : ");
  };

  const dropdownItems = ["Finvasia", "Zerodha", "AngelOne"];

  return (
    <div>
      <hr></hr>
      <div className="divBorder">
        <center>
          <hr></hr>
          <h5 style={{ color: textColor }}>REGISTER YOUR ACCOUNT</h5>
          <hr></hr>
          <Dropdown>
            <Dropdown.Toggle variant={btnVariant}>
              {selectedBrok}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {dropdownItems.map((item) => (
                <Dropdown.Item
                  key={item}
                  onClick={() => {
                    handleSelect(item);
                  }}
                >
                  {item}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <hr></hr>
          {/* Client ID  */}
          <input
            className="inputCls"
            type="text"
            placeholder="Enter Client ID"
            onChange={(id) => {
              setClientId(id.target.value);
            }}
          />
          {/* Password */}
          <input
            className="inputCls"
            type="text"
            placeholder="Enter your Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          {/* ApiKey */}
          <input
            className="inputCls"
            type="text"
            placeholder="Enter your ApiKey"
            onChange={(event) => {
              setApikey(event.target.value);
            }}
          />
          {/* key for Totp */}
          <input
            className="inputCls"
            type="text"
            placeholder="Enter Key for TOTP"
            onChange={(event) => {
              setTotpKey(event.target.value);
            }}
          />
          {/* imei */}
          {isImei && (
            <>
              <input
                className="inputCls"
                type="text"
                placeholder="Enter imei"
                onChange={(event) => {
                  setImei(event.target.value);
                }}
              />{" "}
              <span>i.e. {imei}</span>
            </>
          )}
          <hr></hr>
          {/* Submit button */}
          <Button
            variant={btnVariantSbt}
            onClick={() => {
              setIsSubmitted(true);
              setBtnVariantSbt("success");
              RegisterCPY({
                selectedBrok,
                password,
                apikey,
                totpKey,
                imei,
                clientId,
              });
            }}
          >
            SUBMIT
          </Button>
          {/* Test Credential */}
          <Button
            variant={btnVariantTest}
            style={{ marginLeft: "5px" }}
            onClick={() => {
              setBtnVariantSbt("primary");
              setBtnVariantTest("success");
            }}
          >
            Test Credentials
          </Button>
        </center>
      </div>
      <AccountTestingResult />
    </div>
  );
}
export default Registration;
