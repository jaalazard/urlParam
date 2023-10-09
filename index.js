const express = require("express");

const app = express();

const serverPort = 3310;

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    rate: 8,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    rate: 5,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    rate: 2,
  },
];

app.listen(serverPort, () => {
  console.info(`Listening on port ${serverPort}`);
});

app.get("/movies", (req, res) => {
  const rate = req.query.note ?? 0;
  res.json(movies.filter((movie) => movie.rate > rate));
  const limit = req.query.limit ?? 10;
  res.json(movies.slice(0, limit));
});

app.get("/movies/:id", (req, res) => {
  const movie = movies.find((movie) => movie.id === parseInt(req.params.id));
  if (movie != null) {
    res.json(movie);
  } else {
    res.sendStatus(404);
  }
});
