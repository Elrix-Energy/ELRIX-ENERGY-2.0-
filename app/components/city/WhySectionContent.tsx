import type { WhySectionContent as WhySectionContentType } from "@/app/lib/cityData";

interface WhySectionContentProps {
  content: WhySectionContentType;
  className?: string;
}

export default function WhySectionContent({ content, className = "" }: WhySectionContentProps) {
  return (
    <p className={className}>
      {content.parts.map((part, index) =>
        part.strong ? (
          <strong key={index}>{part.text}</strong>
        ) : (
          <span key={index}>{part.text}</span>
        )
      )}
    </p>
  );
}
