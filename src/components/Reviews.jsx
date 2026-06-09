import { ExternalLink, Star } from "lucide-react";

const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=The+Hosting+Table+Co+reviews";
const TAKE_A_CHEF_REVIEWS_URL = "https://www.takeachef.com/en-us/chef/jimmy-smith";

const testimonials = [
  // {
  //   quote:
  //     "Chef Jimmy created one of the most memorable dining experiences we’ve ever had. Every course was beautifully presented, thoughtful, and absolutely delicious.",
  //   name: "Private Dining Guest",
  //   source: "Google Review",
  // },
  {
    quote:
      "Chef Jimmy nailed it. Fantastic food and great experience for me as host and for my guests. This was a new process for me, but Jimmy made it easy and was great to work with. Highly recommend.",
    source: "Airbnb Guest Feedback",
  },
  // {
  //   quote:
  //     "Professional, warm, organized, and incredibly talented. The Hosting Table Co. made hosting effortless so we could actually enjoy the evening.",
  //   name: "Event Client",
  //   source: "Guest Feedback",
  // },
];

export default function Reviews() {
  return (
    <section className="reviews-section section-wrap" id="reviews">
      <div className="reviews-heading">
        <p className="eyebrow">Reviews</p>
        <h2>Trusted by guests who love thoughtful hospitality.</h2>
        <p>
          Read what clients are saying about private dinners, family-style gatherings,
          meal prep, and custom in-home dining experiences with Chef Jimmy.
        </p>
      </div>

      <div className="review-source-grid" aria-label="Review profile links">
        <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer" className="review-source-card">
          <span className="review-source-label">Google Reviews</span>
          <strong>View recent guest feedback</strong>
          <small>Opens The Hosting Table Co. review results on Google.</small>
          <ExternalLink size={18} aria-hidden="true" />
        </a>

        <a href={TAKE_A_CHEF_REVIEWS_URL} target="_blank" rel="noreferrer" className="review-source-card">
          <span className="review-source-label">Take a Chef</span>
          <strong>See Chef Jimmy’s profile</strong>
          <small>Browse profile details, menus, and platform reviews.</small>
          <ExternalLink size={18} aria-hidden="true" />
        </a>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.quote}>
            <div className="stars" aria-label="Five star review">
              {[...Array(5)].map((_, index) => (
                <Star key={index} size={16} fill="currentColor" aria-hidden="true" />
              ))}
            </div>
            <blockquote>“{testimonial.quote}”</blockquote>
            <footer>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.source}</span>
            </footer>
          </article>
        ))}
      </div>

      <div className="reviews-actions">
        <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer" className="button-outline">
          Read More Google Reviews
        </a>
        <a href={TAKE_A_CHEF_REVIEWS_URL} target="_blank" rel="noreferrer" className="button-dark">
          Read More on Take a Chef
        </a>
      </div>
    </section>
  );
}
