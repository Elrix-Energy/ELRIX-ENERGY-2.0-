import { createPageOgImage } from "@/app/lib/ogImage";

export const alt = "Solar Maintenance & AMC | ELRIX ENERGY";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function MaintenanceSolarOgImage() {
  return createPageOgImage(
    "Solar Maintenance & AMC",
    "Panel Cleaning · Inverter Health · O&M",
  );
}
