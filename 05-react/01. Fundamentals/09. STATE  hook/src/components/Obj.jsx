import { useState } from "react";

const Obj = () => {
  const [movie, setMovie] = useState({
    title: "Bat Man",
    rating: 9.1,
  });

  const handleClick = () => {
    // const copyMovie = {
    //   ...movie,
    //   rating: 8,
    // };

    // setMovie(copyMovie);

    // ShortMethod
    setMovie({ ...movie, rating: 7 });
  };

  return (
    <div>
      <h1>Movie: {movie.title}</h1>

      <p>Ratings: {movie.rating}</p>

      <button onClick={handleClick}>Change Movie</button>
    </div>
  );
};

export default Obj;
