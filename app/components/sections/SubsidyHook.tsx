import Link from "next/link";
import { IndianRupee } from "lucide-react";
import Button from "../ui/Button";

export default function SubsidyHook() {
  return (
    <section className="section subsidy-hook" aria-labelledby="subsidy-hook-heading">
      <div className="container">
        <div className="subsidy-hook__inner">
          <div className="subsidy-hook__content">
            <IndianRupee size={36} className="subsidy-hook__icon" aria-hidden="true" />
            <h2 id="subsidy-hook-heading">Claim Up to ₹78,000 PM Surya Ghar Subsidy</h2>
            <p>
              ELRIX ENERGY is an authorized PM Surya Ghar integrator. We handle the full subsidy
              application, DISCOM approvals, and EMI paperwork — so you get maximum savings with
              zero hassle.
            </p>
          </div>
          <div className="subsidy-hook__actions">
            <Button href="/subsidy" variant="primary" size="lg">
              Check Your Subsidy
            </Button>
            <Link href="/subsidy#emi-calculator" className="subsidy-hook__link">
              Explore EMI Options →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
