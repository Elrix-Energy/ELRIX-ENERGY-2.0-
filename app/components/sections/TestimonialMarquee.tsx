import { Star } from "lucide-react";
import { testimonials } from "@/app/data/testimonials";

export default function TestimonialMarquee() {
  const loopItems = [...testimonials, ...testimonials];

  return (
    <section className="section testimonial-section bg-white relative-z" aria-labelledby="testimonials-heading">
      <div className="container">
        <div className="testimonial-section__header text-center">
          <Star size={40} className="testimonial-section__icon" aria-hidden="true" />
          <h2 id="testimonials-heading">What Our Customers Say</h2>
          <p>Real feedback from homeowners and businesses across Nellore who switched to solar with ELRIX ENERGY.</p>
        </div>
      </div>

      <div className="testimonial-marquee" aria-label="Customer reviews">
        <div className="testimonial-marquee__track">
          {loopItems.map((item, index) => (
            <figure
              key={`${item.id}-${index}`}
              className="testimonial-card"
              aria-hidden={index >= testimonials.length ? true : undefined}
            >
              <blockquote className="testimonial-card__quote">&ldquo;{item.quote}&rdquo;</blockquote>
              <figcaption className="testimonial-card__author">
                <span className="testimonial-card__stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </span>
                <strong>{item.name}</strong>
                <span className="testimonial-card__location">— {item.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Static grid fallback for reduced motion */}
      <div className="container testimonial-grid-fallback" aria-label="Customer reviews">
        {testimonials.map((item) => (
          <figure key={item.id} className="testimonial-card">
            <blockquote className="testimonial-card__quote">&ldquo;{item.quote}&rdquo;</blockquote>
            <figcaption className="testimonial-card__author">
              <span className="testimonial-card__stars" aria-label="5 out of 5 stars">
                ★★★★★
              </span>
              <strong>{item.name}</strong>
              <span className="testimonial-card__location">— {item.location}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
