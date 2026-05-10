import { useEffect, useState } from "react";

export default function UsersPanel() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Backend error");
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>AI Panel - Users Dashboard</h2>

      {/* LOADING STATE */}
      {loading && (
        <div style={styles.center}>
          <div style={styles.spinner}></div>
          <p>Loading users...</p>
        </div>
      )}

      {/* ERROR STATE */}
      {error && (
        <div style={styles.errorBox}>
          ❌ {error}
        </div>
      )}

      {/* DATA CARDS */}
      <div style={styles.grid}>
        {users.map((user) => (
          <div key={user.id} style={styles.card}>
            <h3>{user.name}</h3>
            <p>Status: {user.status}</p>
            <span
              style={{
                ...styles.badge,
                backgroundColor:
                  user.status === "active" ? "green" : "red",
              }}
            >
              {user.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* UI STYLES */
const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  center: {
    textAlign: "center",
    marginTop: "40px",
  },
  spinner: {
    width: "40px",
    height: "40px",
    border: "4px solid #ccc",
    borderTop: "4px solid blue",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    margin: "auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px",
  },
  card: {
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    background: "white",
  },
  badge: {
    padding: "5px 10px",
    borderRadius: "5px",
    color: "white",
    fontSize: "12px",
  },
  errorBox: {
    color: "red",
    textAlign: "center",
  },
};