import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  YAxis,
  Legend,
  CartesianGrid,
  PieChart,
  Pie,
} from "recharts";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
  return (
    <div className="main">
      <div className="col">
        <h4>Bar Chart</h4>
        <BarChart width={550} height={400} data={datas}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" fill="#8884d8" />
          <Bar dataKey="sell" fill="#F69972" />
          <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>
      </div>
      <div className="col col-pie">
        <h4>Pie Chart</h4>
        <PieChart width={550} height={450}>
          <Pie
            data={datas}
            dataKey="sell"
            nameKey="month"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#8884d8"
          />
          <Pie
            data={datas}
            dataKey="revenue"
            nameKey="month"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#82ca9d"
            label
          />
        </PieChart>
      </div>
    </div>
  );
};

export default Dashboard;
