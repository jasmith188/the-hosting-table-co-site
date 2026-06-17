const serviceAreas = [
  {
    city: "Wisconsin Dells",
    title: "Private chef for vacation rentals, cabins & celebrations",
    copy:
      "Ideal for Airbnb dinners, family reunions, birthday weekends, bachelor and bachelorette groups, and relaxed resort-area gatherings.",
  },
  {
    city: "Baraboo",
    title: "Personal chef service close to home",
    copy:
      "Refined in-home dinners, weekly meal prep, date nights, and small celebrations for Baraboo families and nearby communities.",
  },
  {
    city: "Madison",
    title: "Elevated private dining & weekly meal support",
    copy:
      "Multi-course dinners, family-style events, corporate dining, and in-home meal prep for busy households throughout the Madison area.",
  },
  {
    city: "Waunakee",
    title: "Meal prep and private dinners for busy families",
    copy:
      "Chef-prepared weekly meals, postpartum support, family dinners, and special occasion menus customized around your household.",
  },
  {
    city: "Sun Prairie",
    title: "Personal chef services for gatherings and weekly meals",
    copy:
      "Comfortable, polished service for birthdays, anniversaries, brunches, family-style meals, and recurring in-home cooking.",
  },
  {
    city: "Lake Delton",
    title: "Vacation rental dining without the restaurant wait",
    copy:
      "Bring a restaurant-quality experience to your rental home with customized menus, on-site cooking, service, and cleanup.",
  },
];

const faqs = [
  {
    question: "What areas does The Hosting Table Co. serve in Wisconsin?",
    answer:
      "Chef Jimmy currently serves Baraboo, Wisconsin Dells, Lake Delton, Madison, Waunakee, Sun Prairie, Middleton, and nearby South Central Wisconsin communities.",
  },
  {
    question: "Do you cook for Wisconsin Dells vacation rentals and Airbnbs?",
    answer:
      "Yes. Vacation rental and Airbnb dinners are a great fit for family trips, celebrations, bachelor and bachelorette weekends, and groups who want a private dining experience without leaving the property.",
  },
  {
    question: "Can menus be customized?",
    answer:
      "Yes. Menus are starting points and can be adjusted around guest preferences, allergies, dietary needs, budget, service style, and the occasion.",
  },
  {
    question: "Do you offer weekly meal prep?",
    answer:
      "Yes. The Hosting Table Co. offers in-home meal prep for families, professionals, new parents, and clients who want chef-prepared meals ready for the week.",
  },
];

export default function LocalSeoSection() {
  return (
    <section className="local-seo-section section-wrap" id="service-areas">
      <div className="local-seo-heading">
        <p className="eyebrow">Wisconsin Service Areas</p>
        <h2>Private chef services in Baraboo, Wisconsin Dells, Madison, Waunakee & Sun Prairie.</h2>
        <p>
          The Hosting Table Co. is currently based in Baraboo, Wisconsin and serves South Central Wisconsin with private dinners,
          vacation rental dining, weekly meal prep, brunch experiences, corporate dining, and family-style gatherings.
        </p>
      </div>

      {/* <div className="service-area-grid">
        {serviceAreas.map((area) => (
          <article className="service-area-card" key={area.city}>
            <h3>{area.city}</h3>
            <strong>{area.title}</strong>
            <p>{area.copy}</p>
          </article>
        ))}
      </div> */}

      <div className="local-faqs" aria-label="Private chef frequently asked questions">
        <h3>Frequently Asked Questions</h3>
        {faqs.map((faq) => (
          <details key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
