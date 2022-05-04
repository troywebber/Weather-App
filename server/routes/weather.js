import express from "express";
const router = express.Router();
import fetch from "node-fetch";

//get weather data from api and send to client side for rendering in the browser

router.post("/", function (req, res, next) {
  const searchTerm = req.body.searchTerm;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${process.env.API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      res.json(data);
    });
});

export default router;
