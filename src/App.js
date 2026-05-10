import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line
} from "recharts";

function App() {
  const [dashboard, setDashboard] = useState({});
  const [period, setPeriod] = useState("7days");

  useEffect(() => {
    fetch("http://localhost:8080/dashboard")
      .then((res) => res.json())
      .then((data) => setDashboard(data))
      .catch((err) => console.log(err));
  }, []);

  const salesData = [
    { day: "Mon", sales: 1200 },
    { day: "Tue", sales: 2100 },
    { day: "Wed", sales: 800 },
    { day: "Thu", sales: 1600 },
    { day: "Fri", sales: 2900 },
    { day: "Sat", sales: 2400 },
    { day: "Sun", sales: 3200 }
  ];

  const userData = [
    { name: "Active", value: 12 },
    { name: "Inactive", value: 3 }
  ];

  const growthData = [
    { month: "Jan", users: 20 },
    { month: "Feb", users: 35 },
    { month: "Mar", users: 50 },
    { month: "Apr", users: 75 },
    { month: "May", users: 90 }
  ];

  const COLORS = ["#0088FE", "#FF8042"];

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
        background: "#f5f5f5",
        minHeight: "100vh"
      }}
    >
      <h1>📊 Analytics Dashboard</h1>

      <div style={{ marginBottom: "20px" }}>
        <label>Select Period: </label>

        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          style={{
            padding: "8px",
            marginLeft: "10px"
          }}
        >
          <option value="7days">Last 7 Days</option>
          <option value="30days">Last 30 Days</option>
          <option value="year">This Year</option>
        </select>
      </div>

      {/* CARDS */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "30px"
        }}
      >
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "200px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
          }}
        >
          <h3>Total Users</h3>
          <h2>{dashboard.totalUsers}</h2>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "200px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
          }}
        >
          <h3>Total Sales</h3>
          <h2>${dashboard.totalSales}</h2>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "200px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
          }}
        >
          <h3>Total Orders</h3>
          <h2>{dashboard.totalOrders}</h2>
        </div>
      </div>

      {/* BAR CHART */}
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "30px"
        }}
      >
        <h2>📈 Weekly Sales</h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* PIE + LINE */}
      <div
        style={{
          display: "flex",
          gap: "20px"
        }}
      >
        {/* PIE CHART */}
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "50%"
          }}
        >
          <h2>👥 User Status</h2>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={userData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label
              >
                {userData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* LINE CHART */}
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "50%"
          }}
        >
          <h2>📊 User Growth</h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default App;