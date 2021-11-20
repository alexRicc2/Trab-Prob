import { Chart as ReactChart } from "react-charts";
export default function Chart(props) {
  if (props.data.length === 0)
    return (
      <div
        style={{ height: "40rem", width: "40rem", backgroundColor: "#dfdfdf" }}
      ></div>
    );
  return (
    <div style={{ height: "40rem", width: "40rem" }}>
      <ReactChart
        data={props.data}
        series={{ type: props.type }}
        axes={[
          { primary: true, type: "linear", position: "bottom" },
          { type: "linear", position: "left" },
        ]}
        tooltip
      ></ReactChart>
    </div>
  );
}
