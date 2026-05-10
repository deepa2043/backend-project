export default function Pagination({ page, setPage }) {
  return (
    <div style={{ marginTop: 20, display: "flex", gap: 10 }}>

      {/* PREV BUTTON */}
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 0}
      >
        Prev
      </button>

      {/* PAGE DISPLAY */}
      <span>Page {page + 1}</span>

      {/* NEXT BUTTON */}
      <button
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>

    </div>
  );
}