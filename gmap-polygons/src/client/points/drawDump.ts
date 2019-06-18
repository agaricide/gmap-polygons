import dump from "../../../dump.json";
import moment from "moment";

const getColor = (date: moment.Moment) => {
  if (date.isAfter(moment().subtract(30, "minutes"))) return "red";

  if (date.isAfter(moment().subtract(1, "hours"))) return "yellow";

  return "green";
};

const incidents = dump
  .filter(({ location }) => location && location.lat && location.lng)
  .map(({ location, incident }) => ({ ...incident, ...location }));

const drawDump = (map: google.maps.Map): google.maps.Marker[] =>
  incidents.map(({ lat, lng, nature_of_call, date_time }, index) => {
    const position = { lat, lng };
    const title = nature_of_call;
    const date = moment(date_time);
    const color = getColor(date);
    const icon = `http://maps.google.com/mapfiles/ms/icons/${color}-dot.png`;

    const marker = new google.maps.Marker({ map, position, title, icon });

    const infoWindow = new google.maps.InfoWindow({
      content: `<div>${nature_of_call} - ${date.fromNow()}</div>`
    });

    google.maps.event.addListener(marker, "click", function() {
      infoWindow.open(map, marker);
    });

    return marker;
  });

export default drawDump;
