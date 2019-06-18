import searchDallas from "./services/searchDallas";
import getActiveCalls from "./services/getActiveCalls";
import { Incident } from "./types/incident";
import { get } from "lodash";
import { writeFileSync } from "fs";

type latLng = google.maps.LatLngLiteral;

const getIncidentLocation = async (incident: Incident) => {
  const response = await searchDallas(incident.location);
  const place = get(response, "data.candidates", [])[0];
  const location: latLng = get(place, "geometry.location");
  return { incident, location };
};

(async () => {
  const incidents = await getActiveCalls();
  const promises = incidents.map(getIncidentLocation);
  const tuples = await Promise.all(promises);
  const filtered = tuples.filter(tuple => tuple.location);
  const json = JSON.stringify(filtered);
  console.log(json);
  writeFileSync("dump.json", json);
})();
