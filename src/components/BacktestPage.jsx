import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
function BackTest(params) {
  const navigate = useNavigate();
  return (
    <center>
      <h1>BacktestPage</h1>

      <Button
        onClick={() => {
          navigate("/btvumanchu");
        }}
      >
        VuManChu
      </Button>
      <br></br>
      <br></br>
      <Button
        onClick={() => {
          navigate("/btstr30kto3cr");
        }}
      >
        30k-To-3cr
      </Button>
    </center>
  );
}
export default BackTest;
