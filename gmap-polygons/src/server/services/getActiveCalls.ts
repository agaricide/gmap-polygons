import axios from "axios";
import { Incident, toIncident } from "../types/incident";

/**
 * @see https://www.dallasopendata.com/Public-Safety/Dallas-Police-Active-Calls/9fxf-t2tr
 */
const getActiveCalls = (): Promise<Incident[]> =>
  axios
    .get("https://www.dallasopendata.com/resource/9fxf-t2tr.json")
    .then(response => response.data.map((data: any) => toIncident(data)));

export default getActiveCalls;
