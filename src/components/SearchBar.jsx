import { useState, useEffect } from "react";

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const delay = setTimeout(() => {
      onSearch(value);
    }, 500); // debounce 500ms

    return () => clearTimeout(delay);
  }, [value]);

  return (
    <input
      placeholder="Search..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}