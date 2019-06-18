import searchDallas from "./services/searchDallas";
import getActiceCalls from "./services/getActiveCalls";
import { Incident } from "./types/incident";
import { get } from "lodash";

type latLng = google.maps.LatLngLiteral;

getActiceCalls()
  .then((data: Incident[]) => {
    const tuples = data.map(async incident => {
      const response = await searchDallas(incident.location);
      const place = get(response, "data.candidates", [])[0];
      const location: latLng = get(place, "geometry.location");
      return { incident, location };
    });
    return Promise.all(tuples);
  })
  .then(tuples => console.log(JSON.stringify(tuples)));
