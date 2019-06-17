import { Google } from "./config.json";
import { injectMap } from "./map/map";
import drawPoints from "./points/drawPoints";

(async () => {
  console.log("Injecting map!");
  const map = await injectMap(Google.key);
  drawPoints(map);
})();
