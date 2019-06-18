import { Google } from "../config.json";
import { injectMap } from "./map/map";
import drawPoints from "./points/drawPoints";
import drawDump from "./points/drawDump";

(async () => {
  console.log("Injecting map!");
  const map = await injectMap(Google.key);
  drawDump(map);
})();
