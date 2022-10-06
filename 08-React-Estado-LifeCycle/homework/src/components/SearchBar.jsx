import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  function handleChange(e) {
    setCity(e.target.value);
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      e.target.reset();
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        onChange={(e)=>handleChange(e)}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
