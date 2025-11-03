interface MovieDetails {
  readonly name: string;
  rating: number;
  printMovieInfo(name: string, price: number, rating: number): string | number;
}

interface MovieGenra extends MovieDetails {
  genra: string;
}

const movie1: MovieGenra = {
  name: "Star Wars",
  rating: 9.6,
  genra: "Sci-fi",
  printMovieInfo(name, price, rating) {
    return `Movie name: ${name}, Price: ${price}, Rating: ${rating}`;
  },
};

console.log(movie1.printMovieInfo("Dj", 100, 9.5)); // ✅ Output: Movie name: Dj, Price: 100, Rating: 9.5
