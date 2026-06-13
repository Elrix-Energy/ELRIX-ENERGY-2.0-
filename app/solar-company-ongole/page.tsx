import type { Metadata } from "next";
import CityPageShell from "@/app/components/city/CityPageShell";
import { getCityPageData } from "@/app/lib/cityData";
import { buildCityPageMetadata } from "@/app/lib/cityPageMetadata";

const data = getCityPageData("ongole");

export const metadata: Metadata = buildCityPageMetadata(data);

export default function OngolePage() {
  return <CityPageShell data={data} />;
}
