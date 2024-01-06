import React, { useState } from "react";
import DataTable from "./DataTable"; // Make sure to adjust the path
import { create_url } from "../../constants/urls";
import Button from "react-bootstrap/Button";
import axios from "axios";
const Str30kto3cr = () => {
  const [data, setData] = useState([]);
  const [startMonthYear, setstartMonthYear] = useState("12/2023");
  const [endMonthYear, setendMonthYear] = useState("12/2023");
  const [timePeriod, settimeperiod] = useState(3);
  const [symbol, setsymbol] = useState("NIFTY50");
  const [source, setsource] = useState("close");
  const [bbPeriod, setbbPeriod] = useState(20);
  const [bbsd, setbbsd] = useState(2);
  const [rsiPeriod, setrsiPeriod] = useState(14);
  const [rsibuytrglvl, setrsibuytrglvl] = useState(70);
  const [rsiselltrglvl, setrsiselltrglvl] = useState(0);
  const [intStartHour, setintStartHour] = useState(9);
  const [intStartMinute, setintStartMinute] = useState(15);
  const [intEndHour, setintEndHour] = useState(15);
  const [intEndMinute, setintEndMinute] = useState(15);

  async function getBtData() {
    const url = create_url("/btstr30kto3cr");
    const data = {
      from: startMonthYear,
      to: endMonthYear,
      tf: timePeriod,
      symbol: symbol,
      source: source,
      bbPeriod: bbPeriod,
      bbsd: bbsd,
      rsiPeriod: rsiPeriod,
      rsibuytrglvl: rsibuytrglvl,
      rsiselltrglvl: rsiselltrglvl,
      intStartHour: intStartHour,
      intStartMinute: intStartMinute,
      intEndHour: intEndHour,
      intEndMinute: intEndMinute,
    };
    const res = await axios.post(url, data);
    // JSON.parse(res.data.tradelog)
    // console.log(JSON.parse(res.data.tradelog));
    setData(JSON.parse(res.data.tradelog));
  }

  return (
    <div
      style={{
        marginLeft: "40px",
        marginRight: "40px",
        marginTop: "40px",
        textAlign: "center",
      }}
    >
      <hr></hr>
      <center>
        <div
          style={{
            textAlign: "center",
            color: "black",
            width: "30%",
            height: "40px",
            backgroundColor: "yellow",
            textJustify: "inter-word",
            fontStretch: "expanded",
          }}
        >
          <h2>Bollinger Band + Pivot + RSI</h2>
        </div>
        <hr />
        <hr />
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
        &nbsp;&nbsp;&nbsp;
        {" Intraday Start Time : "}
        <input
          placeholder={intStartHour}
          style={{ width: "50px" }}
          onChange={(event) => {
            setintStartHour(event.target.value);
          }}
        />
        {":"}
        <input
          placeholder={intStartMinute}
          style={{ width: "50px" }}
          onChange={(event) => {
            setintStartMinute(event.target.value);
          }}
        />
        &nbsp;&nbsp;&nbsp;
        {" Intraday End Time : "}
        <input
          placeholder={intEndHour}
          style={{ width: "50px" }}
          onChange={(event) => {
            setintEndHour(event.target.value);
          }}
        />
        {":"}
        <input
          placeholder={intEndMinute}
          style={{ width: "50px" }}
          onChange={(event) => {
            setintEndMinute(event.target.value);
          }}
        />
        <hr />
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
        <hr />
        {" BB Period  : "}
        <input
          type="number"
          placeholder={bbPeriod}
          style={{ width: "60px" }}
          onChange={(event) => {
            setbbPeriod(event.target.value);
          }}
        />{" "}
        {" BB SD: "}
        <input
          placeholder={bbsd}
          style={{ width: "40px" }}
          onChange={(event) => {
            setbbsd(event.target.value);
          }}
        />
        <hr />
        {" RSI period: "}
        <input
          placeholder={rsiPeriod}
          typeof="number"
          style={{ width: "60px" }}
          onChange={(event) => {
            setrsiPeriod(event.target.value);
          }}
        />
        {" RSI Buy trg. : "}
        <input
          placeholder={rsibuytrglvl}
          typeof="number"
          style={{ width: "60px" }}
          onChange={(event) => {
            setrsibuytrglvl(event.target.value);
          }}
        />
        {" RSI Sell trg. : "}
        <input
          placeholder={rsiselltrglvl}
          typeof="number"
          style={{ width: "60px" }}
          onChange={(event) => {
            setrsiselltrglvl(event.target.value);
          }}
        />
        <hr />
        <Button variant="info" onClick={getBtData}>
          Click Here
        </Button>
        <DataTable data={data} />
      </center>
    </div>
  );
};

export default Str30kto3cr;
