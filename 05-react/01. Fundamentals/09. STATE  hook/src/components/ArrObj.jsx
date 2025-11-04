import { useState } from "react";

const ArrObj = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: "Spider Man", rating: 8 },
    { id: 2, title: "Super Man", rating: 9 },
  ]);

  const clickHandel = () => {
    setMovies(
      movies.map((m) => (m.id === 1 ? { ...m, title: "Black Cat" } : m))
    );
  };

  return (
    <div>
      {movies.map((m) => (
        <li key={Math.random()}>{m.title}</li>
      ))}

      <button onClick={clickHandel}>Change Name</button>
    </div>
  );
};

export default ArrObj;
