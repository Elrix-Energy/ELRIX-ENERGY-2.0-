import { buildFaqPageSchema } from "@/app/lib/citySchema";
import type { CityPageData } from "@/app/lib/cityData";
import CityLanding from "../views/CityLanding";

interface CityPageShellProps {
  data: CityPageData;
}

export default function CityPageShell({ data }: CityPageShellProps) {
  const faqSchema = buildFaqPageSchema(data.faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data.localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CityLanding data={data} />
    </>
  );
}
