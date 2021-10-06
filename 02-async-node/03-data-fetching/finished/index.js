import fetch from "isomorphic-fetch";

fetch("https://pet-library.moonhighway.com/api/pets")
  .then(res => res.json())
  .then(console.log);
