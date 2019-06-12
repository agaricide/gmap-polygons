import "./map.css";

const createDiv = (id = ""): HTMLDivElement => {
  const div = document.createElement("div");
  div.id = id;
  document.body.appendChild(div);
  return div;
};

const initMap = () =>
  new Promise<google.maps.Map>((resolve, _) => {
    const div = createDiv("map");
    const map = new google.maps.Map(div, {
      center: { lat: 32.7767, lng: -96.797 },
      zoom: 15
    });
    resolve(map);
  });

const googleMapsUrl =
  "https://maps.googleapis.com/maps/api/js?key=AIzaSyDLfK6Ay-NkW5FRc-mmb82-nsSYWy9m0po&libraries=drawing";

const injectMap = () =>
  new Promise<google.maps.Map>((resolve, reject) => {
    const scriptSelector = `[src="${googleMapsUrl}"]`;
    const isInjected = document.querySelectorAll(scriptSelector).length;

    if (isInjected) reject("Google Maps script is already injected.");

    const script: HTMLScriptElement = document.createElement("script");
    script.type = "text/javascript";
    script.src = googleMapsUrl;
    script.onload = () =>
      initMap()
        .then(resolve)
        .catch(reject);

    document.body.appendChild(script);
  });

export { injectMap };
