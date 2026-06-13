import Image from "next/image";
import styles from "./ContentImage.module.css";

interface ContentImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
}

export default function ContentImage({
  src,
  alt,
  className = "",
  priority = false,
  width = 800,
  height = 500,
}: ContentImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes="(max-width: 768px) 100vw, 50vw"
      priority={priority}
      className={`${styles.image} ${className}`.trim()}
    />
  );
}
