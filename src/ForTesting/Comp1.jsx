import { sampleData } from "./SampleData";
import Card from "./Comp2";
import { useSelector } from "react-redux";
function Comp1(params) {
  const storedData = useSelector((state) => state);
  const totalSal = storedData.card.reduce((a, b) => {
    return a + b.payload.salary;
  }, 0);
  console.log(storedData);
  return (
    <div>
      <h1>
        Total Count = {storedData.card.length} , Total Salary = {totalSal}
      </h1>
      {sampleData.map((details) => (
        <Card {...details} />
      ))}
    </div>
  );
}
export default Comp1;
