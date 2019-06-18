// import points from "./points.json";
import dump from "./dump.json";
import moment from "moment";

const points = dump
  .filter(({ location }) => location && location.lat && location.lng)
  .filter(incident => incident.location)
  .map(({ location, incident }) => ({ ...incident, ...location }));

const drawPoints = (map: google.maps.Map): google.maps.Marker[] =>
  points.map(({ lat, lng, nature_of_call, date_time }, index) => {
    const position = { lat, lng };
    const title = nature_of_call;
    const marker = new google.maps.Marker({ map, position, title });
    const infoWindow = new google.maps.InfoWindow({
      content: `<div>
        ${nature_of_call}
        ${moment(date_time).fromNow()}
      </div>`
    });
    google.maps.event.addListener(marker, "click", function() {
      infoWindow.open(map, marker);
    });

    return marker;
  });

export default drawPoints;
