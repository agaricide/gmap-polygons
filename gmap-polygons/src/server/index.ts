import searchDallas from "./services/searchDallas";
import getActiceCalls from "./services/getActiveCalls";
import { Incident } from "./types/incident";

// searchDallas("W Illinois Ave")
//   .then(response => {
//     console.log(response.data.candidates[0]);
//   })
//   .catch(error => {
//     console.log(error);
//   });

getActiceCalls().then((data: Incident[]) => {
  data.map(incident => console.log(incident));
});
