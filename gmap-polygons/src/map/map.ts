import "./map.css";

const createDiv = (id = ""): HTMLDivElement => {
  const div = document.createElement("div");
  div.id = id;
  document.body.appendChild(div);
  return div;
};

const initMap = (): Promise<google.maps.Map> => {
  const div = createDiv("map");
  const map = new google.maps.Map(div, {
    center: { lat: 32.7767, lng: -96.797 },
    zoom: 15
  });
  return Promise.resolve(map);
};

const googleMapsUrl =
  "https://maps.googleapis.com/maps/api/js?key=AIzaSyDLfK6Ay-NkW5FRc-mmb82-nsSYWy9m0po&libraries=drawing";

const injectMap = () =>
  new Promise<google.maps.Map>((resolve, reject) => {
    if (!document.querySelectorAll(`[src="${googleMapsUrl}"]`).length) {
      const el = document.createElement("script");
      el.type = "text/javascript";
      el.src = googleMapsUrl;
      el.onload = () =>
        initMap()
          .then(map => resolve(map))
          .catch(err => reject(err));

      document.body.appendChild(el);
    }
  });

export { injectMap };
