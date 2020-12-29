import React, { useState } from "react";
import "./App.css";
import MovieList from "./MovieList";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Split",
      rate: 5,
      description:
        "Though Kevin (James McAvoy) has evidenced 23 personalities to his trusted psychiatrist, there remains one still submerged who is set to materialize and dominate the others.",
      posterurl:
        "https://images-na.ssl-images-amazon.com/images/I/61aXJhiP1JL._AC_SL1109_.jpg",
    },
    {
      title: "The Revenant",
      rate: 3,
      description:
        "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",
      posterurl:
        "http://barkerhost.com/wp-content/uploads/sites/4/2016/04/1byGYKg1xYTk8aOUfpRCGrGB91o-9.jpg",
    },
    {
      title: "The Dark Night",
      rate: 2,
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      posterurl:
        "https://play-lh.googleusercontent.com/auIs5tjWlLYaFPGClZOJ7m5YVbnX6uBvz0X02r8TkwFKdzE53ww2MqWSS9gU0YNqoYwvpg=w400-h600-rw",
    },
  ]);
  return (
    <div className="App">
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
