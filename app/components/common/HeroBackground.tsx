import Image from "next/image";
import { PUBLIC_ASSETS } from "@/app/lib/siteConfig";
import styles from "./HeroBackground.module.css";

type HeroOverlayVariant = "home" | "city";

interface HeroBackgroundProps {
  priority?: boolean;
  objectPosition?: string;
  overlay?: HeroOverlayVariant;
}

export default function HeroBackground({
  priority = false,
  objectPosition = "58% center",
  overlay = "home",
}: HeroBackgroundProps) {
  const overlayClass =
    overlay === "city" ? styles.overlayCity : styles.overlayHome;

  return (
    <>
      <div className={styles.root} aria-hidden="true">
        <Image
          src={PUBLIC_ASSETS.heroBackground}
          alt=""
          fill
          priority={priority}
          sizes="100vw"
          className={styles.image}
          style={{ objectPosition }}
        />
      </div>
      <div className={overlayClass} aria-hidden="true" />
    </>
  );
}
