import React from "react";
import Cell from "./Cell";

const MovieList = () => {
  const movies = [
    { title: "The maze runner", genra: "sci-fric action advendure" },
    { title: "The maze runner 2", genra: "sci-fric action advendure" },
    { title: "The maze runner 3", genra: "sci-fric action advendure" },
  ];
  return (
    <>
      <div>MovieList</div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.title}>
            <Cell title={movie.title} genra={movie.genra} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieList;
