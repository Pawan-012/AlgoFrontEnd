import Login from "./login";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavigationBar01 from "./NavBar";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import Carousal from "./Carousal";
import ContactUs from "./HomeComponent/ContactUs";

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
      <Carousal />
      <ContactUs />
    </>
  );
}
export default HomePage;
