import { buildBreadcrumbSchema, buildFaqPageSchema } from "@/app/lib/seoConfig";
import type { CityPageData } from "@/app/lib/cityData";
import CityLanding from "../views/CityLanding";

interface CityPageShellProps {
  data: CityPageData;
}

export default function CityPageShell({ data }: CityPageShellProps) {
  const structuredData = [
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: `Solar Company in ${data.city}`, path: data.path },
    ]),
    data.localBusinessSchema,
    buildFaqPageSchema(data.faqs),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <CityLanding data={data} />
    </>
  );
}
