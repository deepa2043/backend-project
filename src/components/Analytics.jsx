import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const Analytics = () => {
  const [data, setData] = useState([]);
  const [period, setPeriod] = useState("7"); // default last 7 days

  useEffect(() => {
    fetch(`/api/analytics?days=${period}`)
      .then(res => res.json())
      .then(setData);
  }, [period]);

  return (
    <div>
      <h2>Analytics</h2>
      <select value={period} onChange={e => setPeriod(e.target.value)}>
        <option value="7">Last 7 Days</option>
        <option value="30">Last 30 Days</option>
        <option value="90">Last 90 Days</option>
      </select>

      <LineChart width={800} height={400} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="count" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default Analytics;