const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", (req, res) => {
  res.json(controller.getMovies);
});

router.get("/:id", (req, res) => {
  res, json(controller.getMovie(req.params.id));
});

router.post("/", (req, res) => {
  const movie = req.body;
  controller.newMovie(movie, (err, movies) => {
    if (err) {
      res.error(err);
    } else {
      res.json(movies);
    }
  });
});
router.put("/", (req, res) => {
  controller.updateMovie(req.body, (err, movies) => {
    if (err) {
      res.error(err);
    } else {
      res.json(movies);
    }
  });
});

router.delete("/:id", (req, res) => {
  controller.deleteMovie(req.params.id, (err, movies) => {
    if (err) {
      res.error(err);
    } else {
      res.json(movies);
    }
  });
});

module.exports = router;
