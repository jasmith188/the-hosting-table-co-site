import { ExternalLink } from "lucide-react";

const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=The+Hosting+Table+Co.&ludocid=2223884113885501605&ibp=gwp;0,7&source=g.page.m.kd._";
const GOOGLE_WRITE_REVIEW_URL = "https://g.page/r/CaWYx6XR0tweEAI/review";
const TAKE_A_CHEF_REVIEWS_URL = "https://www.takeachef.com/en-us/chef/jimmy-smith";

const testimonials = [
  {
    quote:
      "Jimmy was absolutely incredible This was our first experience with an in home chef and it has absolutely set the bar! As a family we have done fine dining and decided this time let’s stay in This was for our Father’s Day gathering for a group of 6 No one was left hungry or without food to go home with Accommodating on even a smaller kitchen Amazing menu with grass fed local beef and ingredients fresh from the farmers market I cannot recommend him more Everything tasted so fresh and I’m just so happy with it The service was also amazing He’s super personable and really helped quell and nerves of having a stranger in your home Again i cannot recommend him enough!!!",
    
    source: "Guest Feedback",
  },
  {
    quote:
      "Chef Jimmy nailed it. Fantastic food and great experience for me as host and for my guests. This was a new process for me, but Jimmy made it easy and was great to work with. Highly recommend.",
    source: "Airbnb Guest Feedback",
  },
   {
    quote:
      "Jimmy was wonderful! He really made my birthday dinner extra special, what a treat as a new mom!",
    source: "Guest Feedback",
  },
  {
    quote:
      "I want to start by saying that this was the first time I have done something like this and it may be one of the best experiences I have ever had. Chef Jimmy was one of the coolest people I've ever met. Great conversation, great person, and the food was just the icing in the cake. Everything was delicious, came out fast, and looked immaculate as well. I would recommend 100 out of 100 times",
    source: "Guest Feedback",
  },
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
            <blockquote>“{testimonial.quote}”</blockquote>
            <footer>
              {testimonial.name && <strong>{testimonial.name}</strong>}
              <span>{testimonial.source}</span>
            </footer>
          </article>
        ))}
      </div>

      <div className="reviews-actions">
        <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer" className="button-outline">
          Read More Google Reviews
        </a>
        <a href={GOOGLE_WRITE_REVIEW_URL} target="_blank" rel="noreferrer" className="button-outline">
          Write a Google Review
        </a>
        <a href={TAKE_A_CHEF_REVIEWS_URL} target="_blank" rel="noreferrer" className="button-dark">
          Read More on Take a Chef
        </a>
      </div>
    </section>
  );
}
