"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styles from "./chart.module.css";

const data = [
  {
    name: "Sun",
    visit: 2504,
    click: 1390,
  },
  {
    name: "Mon",
    visit: 1984,
    click: 1560,
  },
  {
    name: "Tue",
    visit: 1850,
    click: 1350,
  },
  {
    name: "Wed",
    visit: 1725,
    click: 1600,
  },
  {
    name: "Thu",
    visit: 2349,
    click: 2002,
  },
  {
    name: "Fri",
    visit: 2653,
    click: 2890,
  },
  {
    name: "Sat",
    visit: 3265,
    click: 3500,
  },
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Recap</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="name"
            tick={{ fill: "#CAEDFF" }}
            axisLine={{ stroke: "#FBF0B2" }}
          />
          <YAxis tick={{ fill: "#CAEDFF" }} axisLine={{ stroke: "#FBF0B2" }} />
          <Tooltip contentStyle={{ background: "#192655", border: "none" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="visit"
            stroke="#FF90C2"
            strokeDasharray="15 5"
          />
          <Line
            type="monotone"
            dataKey="click"
            stroke="#F2F7A1"
            strokeDasharray="5 5"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
export default Chart;
