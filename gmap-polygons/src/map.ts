import "map.css";

type GMap = google.maps.Map;

const createDiv = (id = "") => {
  const div: HTMLDivElement = document.createElement("div");
  div.id = id;
  document.body.appendChild(div);
  return div;
};

const initMap = () => {
  const div = createDiv("map");
  const map: GMap = new google.maps.Map(div, {
    center: { lat: 32.7767, lng: -96.797 },
    zoom: 15
  });
  return Promise.resolve(map);
};

const googleMapsUrl =
  "https://maps.googleapis.com/maps/api/js?key=AIzaSyDLfK6Ay-NkW5FRc-mmb82-nsSYWy9m0po&libraries=drawing";

const injectMap = () =>
  new Promise<GMap>((resolve, reject) => {
    if (!document.querySelectorAll(`[src="${googleMapsUrl}"]`).length) {
      document.body.appendChild(
        Object.assign(document.createElement("script"), {
          type: "text/javascript",
          src: googleMapsUrl,
          onload: () =>
            initMap()
              .then(map => resolve(map))
              .catch(err => reject(err))
        })
      );
    }
  });

export { injectMap };
