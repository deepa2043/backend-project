export default function DateRangeFilter({ onChange }) {
  return (
    <>
      <input type="date" onChange={(e) => onChange("start", e.target.value)} />
      <input type="date" onChange={(e) => onChange("end", e.target.value)} />
    </>
  );
}