import { injectMap } from "./map";

console.log("Injecting map!");

(async () => {
  const map = await injectMap();
  const coords = { lat: 32.78391, lng: -96.765375 };

  new google.maps.Marker({
    position: coords,
    map: map,
    title: "Hello World!"
  });

  const coords2 = { lat: 32.787682, lng: -96.784360 };

  new google.maps.Marker({
    position: coords2,
    map: map,
    title: "Hello World!"
  });

})();
