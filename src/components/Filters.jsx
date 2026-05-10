import debounce from "lodash.debounce";

export default function Filters({ search, setSearch, status, setStatus }) {

  const handleSearch = debounce((value) => {
    setSearch(value);
  }, 400);

  return (
    <div style={{ marginBottom: 20 }}>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search by name..."
        onChange={(e) => handleSearch(e.target.value)}
        style={{ padding: 8, marginRight: 10 }}
      />

      {/* STATUS FILTER */}
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        style={{ padding: 8 }}
      >
        <option value="">All Status</option>
        <option value="ACTIVE">ACTIVE</option>
        <option value="INACTIVE">INACTIVE</option>
        <option value="NEW">NEW</option>
      </select>

    </div>
  );
}