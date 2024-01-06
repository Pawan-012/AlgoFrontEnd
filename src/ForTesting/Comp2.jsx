import { useDispatch } from "react-redux";
import { addItem } from "../Redux/Slices/card";
function Card(props) {
  const dispacher = useDispatch();
  return (
    <div
      style={{
        border: "solid rgb(169, 167, 167)",
        display: "inline-block",
        margin: "5px",
        padding: "10px",
        width: "200px",
      }}
    >
      <h1>Name : {props.name}</h1>
      <h4 style={{ color: "blue" }}>Profession : {props.details}</h4>
      <h6 style={{ color: "green" }}>Salary {props.salary}</h6>
      <button
        onClick={(e) => {
          dispacher(
            addItem({
              payload: {
                name: props.name,
                details: props.details,
                salary: props.salary,
              },
            })
          );
        }}
      >
        Add
      </button>
    </div>
  );
}
export default Card;
