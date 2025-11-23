import { useEffect, useState } from "react";
import MoviesCard from "./components/MoviesCard";

const App = () => {
  const [userInput, SetUserInput] = useState("");
  const [movies, SetMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const movieSearch = async (userInputV) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${
          import.meta.env.VITE_OMDB_API_KEY
        }&s=${userInputV}`
      );

      const data = await res.json();

      SetMovies(data.Search || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    movieSearch(userInput);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    movieSearch(userInput);
  };

  return (
    <div>
      <h1>🎬 Movie Search</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          placeholder="Enter Ur Movie Name"
          onChange={(e) => SetUserInput(e.target.value)}
        />

        <button type="submit">Search 🔍</button>
      </form>

      {loading ? (
        <p>Loading...</p>
      ) : movies.length ? (
        <MoviesCard movies={movies} />
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};

export default App;
