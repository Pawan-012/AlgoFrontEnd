import Login from "./login";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavigationBar01 from "./NavBar";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

function HomePage(params) {
  const [dataFromBack, setDataFromBack] = useState("");
  const [counter, setcounter] = useState(0);
  const navigate = useNavigate();
  // function
  async function TestFunction() {
    const response = await axios.get("http://127.0.0.1:5000/test");
    setDataFromBack(response.data);
    setcounter(counter + 1);
    console.log("response");
  }

  return (
    <>
      <center></center>
      <Button
        variant="primary"
        onClick={() => {
          navigate("/login");
        }}
      >
        LOGIN
      </Button>{" "}
      <Button variant="secondary">Secondary</Button>{" "}
      <Button variant="success">Success</Button>{" "}
      <Button variant="warning">Warning</Button>{" "}
      <Button variant="danger">Danger</Button>{" "}
      <Button variant="info" onClick={TestFunction}>
        TEST
      </Button>{" "}
      <Button variant="light">Light</Button>{" "}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
      <h1>
        {dataFromBack}
        {counter}
      </h1>
    </>
  );
}
export default HomePage;
