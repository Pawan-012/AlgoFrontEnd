import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { create_url } from "../constants/urls";
function Str3Min(params) {
  //response

  const [response, setResponse] = useState("");
  //parameters
  /// 1) time
  const [month, setMonth] = useState(12);
  const [year, setYear] = useState(2023);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  // 2) buy or sell
  const [buyOrSell, setBuyOrSell] = useState("");
  //3) fut_symbol
  const [fut_symbol, setfut_symbol] = useState("NIFTY28DEC23F");
  //4) interval
  const [interval, setinterval] = useState(3);
  //5) exp_date
  const [exp_date, setexp_date] = useState("14DEC23");
  //6) opt_exchange
  const [opt_exchange, setopt_exchange] = useState("NFO");
  //7) spot_exchange
  const [spot_exchange, setspot_exchange] = useState("NSE");
  // 8)option_start_word
  const [option_start_word, setoption_start_word] = useState("NIFTY");
  // 9) strike_price_difference
  const [strike_price_difference, setstrike_price_difference] = useState(50);
  //10) max_risk
  const [max_risk, setmax_risk] = useState(1000);
  async function submitTo3minstr(params) {
    const payload = {
      buyOrSell: buyOrSell,
      hour: hour,
      minute: minute,
      year: year,
      fut_symbol: fut_symbol,
      interval: interval,
      exp_date: exp_date,
      spot_exchange: spot_exchange,
      option_start_word: option_start_word,
      strike_price_difference: strike_price_difference,
      max_risk: max_risk,
    };
    const res = await axios.post(create_url("/3minSetup"), payload);
    setResponse(res.data);
  }
  return (
    <>
      <h1>This is # min</h1>
      <Form.Select aria-label="Default select example">
        <option>FLAG</option>
        <option
          value="1"
          onClick={() => {
            setBuyOrSell("BUY");
          }}
        >
          BUY
        </option>
        <option
          value="2"
          onClick={() => {
            setBuyOrSell("SELL");
          }}
        >
          SELL
        </option>
      </Form.Select>
      <br></br> Minute :{" "}
      <input
        type="number"
        min={0}
        max={60}
        onChange={(event) => {
          setMinute(event.target.value);
        }}
      />{" "}
      Hour :{" "}
      <input
        type="number"
        min={0}
        max={24}
        onChange={(event) => {
          setHour(event.target.value);
        }}
      />{" "}
      Month :{" "}
      <input
        type="number"
        min={1}
        max={12}
        placeholder={month}
        onChange={(event) => {
          setMonth(event.target.value);
        }}
      />{" "}
      Year :{" "}
      <input
        type="number"
        min={1}
        max={12}
        placeholder={year}
        onChange={(event) => {
          setYear(event.target.value);
        }}
      />
      <br></br>
      Fut Symbol :{" "}
      <input
        type="text"
        placeholder={fut_symbol}
        onChange={(event) => {
          setfut_symbol(event.target.value);
        }}
      />
      <br></br>
      Interval :{" "}
      <input
        type="text"
        placeholder={interval}
        onChange={(event) => {
          setinterval(event.target.value);
        }}
      />
      <br></br>
      Opt Expiry Date :{" "}
      <input
        type="text"
        placeholder={exp_date}
        onChange={(event) => {
          setexp_date(event.target.value);
        }}
      />{" "}
      Option Exchange :
      <input
        type="text"
        placeholder={opt_exchange}
        onChange={(event) => {
          setopt_exchange(event.target.value);
        }}
      />{" "}
      Spot Exchange :
      <input
        type="text"
        placeholder={spot_exchange}
        onChange={(event) => {
          setspot_exchange(event.target.value);
        }}
      />{" "}
      Opt Start Word :
      <input
        type="text"
        placeholder={option_start_word}
        onChange={(event) => {
          setoption_start_word(event.target.value);
        }}
      />{" "}
      Strike Price Difference :
      <input
        type="text"
        placeholder={strike_price_difference}
        onChange={(event) => {
          setstrike_price_difference(event.target.value);
        }}
      />{" "}
      <br></br>
      Max Risk :
      <input
        type="number"
        min={100}
        placeholder={max_risk}
        onChange={(event) => {
          setmax_risk(event.target.value);
        }}
      />{" "}
      <br></br>
      <Button variant="warning" onClick={submitTo3minstr}>
        SUBMIT
      </Button>{" "}
      {response}
    </>
  );
}
export default Str3Min;
