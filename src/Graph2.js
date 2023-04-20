import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid} from "recharts";

const data = [
  { name: "January", uv: 20, uv1: 25 },
  { name: "February", uv: 45, uv1: 45 },
  { name: "March", uv: 25, uv1: 65 },
  { name: "April", uv: 55, uv1: 77 },
  { uv: 65, uv1: 22 },
  { uv: 45, uv1: 22 },
  { uv: 60, uv1: 22 }
];

const CustomizedDot = () => null;

const NoAxisLineChart = () => {
    return (
  <LineChart width={700} height={160} data={data}>
    <XAxis
      dataKey="name"
      tickLine={{ stroke: "#ccc", strokeWidth: 0 }}
      axisLine={false}
      tick={{ dx: 150 , dy:0}}
    />
    <YAxis tickLine={{ stroke: "#ccc", strokeWidth: 0 }} axisLine={false} />
    <CartesianGrid stroke="#EAEAEA" strokeDasharray="100 0" vertical={false} />
    <Line type="monotone" dataKey="uv" stroke="#9BDD7C" strokeWidth="2" dot={<CustomizedDot />}/>
    <Line type="monotone" dataKey="uv1" stroke="#E9A0A0" strokeWidth="2" dot={<CustomizedDot />} />
  </LineChart>
);
}


export default NoAxisLineChart;
