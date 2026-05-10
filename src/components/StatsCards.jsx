export default function StatsCards({ users }) {
  const total = users.length;
  const active = users.filter(u => u.status === "ACTIVE").length;
  const inactive = users.filter(u => u.status === "INACTIVE").length;

  const cardStyle = {
    padding: 15,
    borderRadius: 10,
    background: "#f4f4f4",
    width: 150,
    textAlign: "center",
    marginRight: 10,
    display: "inline-block"
  };

  return (
    <div style={{ marginBottom: 20 }}>
      
      <div style={cardStyle}>
        <h2>{total}</h2>
        <p>Total Users</p>
      </div>

      <div style={cardStyle}>
        <h2>{active}</h2>
        <p>Active</p>
      </div>

      <div style={cardStyle}>
        <h2>{inactive}</h2>
        <p>Inactive</p>
      </div>

    </div>
  );
}