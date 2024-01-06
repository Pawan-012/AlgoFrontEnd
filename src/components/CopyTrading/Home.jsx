import { Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Home(params) {
  // const [selectedItem, setSelectedItem] = useState("");
  const navigate = useNavigate();
  return (
    <div style={{ marginLeft: "10%", marginRight: "10%", marginTop: "20px" }}>
      <Button variant="info">Check All connected People</Button>{" "}
      <Button
        variant="info"
        onClick={() => {
          navigate("/copy-trading-registration");
        }}
      >
        Register New One
      </Button>
      <hr></hr>
      <h3 style={{ borderbottom: "2px solid black" }}>Copy Trading</h3>
      <p>
        This tool provide you the power to execute orders in multiple account at
        same time with negligible latency.
      </p>
      <h3>Choose your broker</h3>
    </div>
  );
}
export default Home;
