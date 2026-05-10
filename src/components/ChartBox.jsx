import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

function ChartBox({ stats }) {
  const data = [
    { name: "Total", value: stats.totalUsers },
    { name: "Active", value: stats.activeUsers },
    { name: "Inactive", value: stats.inactiveUsers },
    { name: "New", value: stats.newUsers }
  ];

  return (
    <BarChart width={400} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" fill="#4f46e5" />
    </BarChart>
  );
}

export default ChartBox;