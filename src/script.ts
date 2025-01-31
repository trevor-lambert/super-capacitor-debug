import { presentMicroapp } from "@ionic-enterprise/super-capacitor/superapp";

function handleClick() {
  presentMicroapp({
    name: "Portals Debug App",
    startDir: "portals-debug-app",
    type: "push",
  });
}

// @ts-ignore
document
  .getElementById("microappButton")
  .addEventListener("click", handleClick);
