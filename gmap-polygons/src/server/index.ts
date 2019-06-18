import searchPlace from "./services/searchPlace";

searchPlace("W Illinois Ave")
  .then(response => {
    console.log(response);
    console.log(response.data.candidates[0]);
  })
  .catch(error => {
    console.log(error);
  });
