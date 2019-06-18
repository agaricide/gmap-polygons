import points from "./points.json";

const drawPoints = (map: google.maps.Map): google.maps.Marker[] =>
  points.map(({ lat, lng }, index) => {
    const position = { lat, lng };
    const title = `Point #${index}`;
    return new google.maps.Marker({ map, position, title });
  });

export default drawPoints;
