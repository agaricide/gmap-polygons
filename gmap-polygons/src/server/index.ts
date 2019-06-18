import searchPlace from "./services/searchPlace";
import getActiceCalls from "./services/getActiveCalls";
import { Incident } from "./types/incident";

// searchPlace("W Illinois Ave")
//   .then(response => {
//     console.log(response.data.candidates[0]);
//   })
//   .catch(error => {
//     console.log(error);
//   });

getActiceCalls().then((data: Incident[]) => {
  data.map(incident => console.log(incident));
});
