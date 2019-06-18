import axios from "axios";
import { Dallas } from "../../constants.json";
import { Google } from "../../config.json";

const { lat, lng }: google.maps.LatLngLiteral = Dallas;

/**w
 *
 * @param input a place search input (a location, cross street, etc.)
 * @see https://developers.google.com/places/web-service/search
 */
const searchPlace = (input: string): Promise<any> =>
  axios.get(
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json",
    {
      params: {
        input,
        inputtype: "textquery",
        fields: "formatted_address,name,opening_hours,rating,geometry/location",
        locationbias: `circle:2000@${lat},${lng}`,
        key: Google.key
      }
    }
  );

export default searchPlace;