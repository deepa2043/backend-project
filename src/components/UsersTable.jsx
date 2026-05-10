export default function UsersTable({ users }) {
  return (
    <div style={{ marginTop: 20 }}>

      <table width="100%" border="1" cellPadding="10">
        <thead style={{ background: "#f2f2f2" }}>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Created At</th>
          </tr>
        </thead>

        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No Users Found
              </td>
            </tr>
          ) : (
            users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.status}</td>
                <td>{u.createdAt}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

    </div>
  );
}