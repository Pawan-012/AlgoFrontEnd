import React, { useState } from "react";
import DataTable from "./DataTable"; // Make sure to adjust the path
import { create_url } from "../../constants/urls";
import Button from "react-bootstrap/Button";
import axios from "axios";
const BTvumanchu = () => {
  const [data, setData] = useState([]);
  const [startMonthYear, setstartMonthYear] = useState("12/2023");
  const [endMonthYear, setendMonthYear] = useState("12/2023");
  const [timePeriod, settimeperiod] = useState(3);
  const [symbol, setsymbol] = useState("NIFTY50");
  const [source, setsource] = useState("close");
  async function getBtData() {
    const url = create_url("/btvumanchu");
    const data = {
      from: startMonthYear,
      to: endMonthYear,
      source: source,
      symbol: symbol,
      tf: timePeriod,
    };
    const res = await axios.post(url, data);
    console.log(res.data);
    setData(res.data);
  }

  return (
    <div>
      <h3>VuManChu Backtesting</h3>
      <Button variant="info" onClick={getBtData}>
        Click Here
      </Button>
      {" From "}
      <input
        placeholder="mm/yyyy"
        style={{ width: "80px" }}
        onChange={(event) => {
          setstartMonthYear(event.target.value);
        }}
      />
      {" To "}
      <input
        placeholder="mm/yyyy"
        style={{ width: "80px" }}
        onChange={(event) => {
          setendMonthYear(event.target.value);
        }}
      />
      {"_____"}
      <label htmlFor="period">Period : </label>{" "}
      <select
        id="period"
        value={timePeriod}
        onChange={(event) => {
          settimeperiod(event.target.value);
        }}
      >
        <option value="">PERIOD</option>
        <option value={3}>3</option>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={30}>30</option>
        <option value={60}>60</option>
      </select>
      {"_"}
      <label htmlFor="symbol">Symbol : </label>{" "}
      <select
        id="symbol"
        value={symbol}
        onChange={(event) => {
          setsymbol(event.target.value);
        }}
      >
        <option value="NIFTY50">NIFTY50</option>
        <option value="BANKNIFTY">BANKNIFTY</option>
        <option value="ADANI">ADANI</option>
        <option value="RELIANCE">RELIANCE</option>
        <option value="FINNIFTY">FINNIFTY</option>
        <option value="MIDCAPNIFTY">MIDCAPNIFTY</option>
      </select>
      {"_"}
      <label htmlFor="source">Source : </label>{" "}
      <select
        id="source"
        value={source}
        onChange={(event) => {
          setsource(event.target.value);
        }}
      >
        <option value="close">CLOSE</option>
        <option value="open">OPEN</option>
        <option value="high">HIGH</option>
        <option value="low">LOW</option>
      </select>
      <DataTable data={data} />
    </div>
  );
};

export default BTvumanchu;
