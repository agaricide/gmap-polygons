import { injectMap } from "./map";

console.log("Injecting map!");

(async () => {
  const map = await injectMap();
})();
