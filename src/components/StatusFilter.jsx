export default function StatusFilter({ onChange }) {
  return (
    <select onChange={(e) => onChange(e.target.value)}>
      <option value="">All</option>
      <option value="ACTIVE">Active</option>
      <option value="INACTIVE">Inactive</option>
    </select>
  );
}