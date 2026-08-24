const serviceAreas = [
  {
    city: "Fredericksburg",
    path: "/private-chef-fredericksburg-va/",
    title: "Private dining in the heart of the Fredericksburg region",
    copy:
      "Customized in-home dinners, date nights, brunches, weekly meal prep, and celebrations throughout Fredericksburg and the surrounding area.",
  },
  {
    city: "Stafford",
    path: "/private-chef-stafford-va/",
    title: "Personal chef service for gatherings and weekly meals",
    copy:
      "Polished private dinners, family-style events, and recurring meal support for households throughout Stafford County.",
  },
  {
    city: "Spotsylvania",
    path: "/private-chef-spotsylvania-va/",
    title: "Elevated in-home dining for special occasions",
    copy:
      "Multi-course dinners, milestone celebrations, vacation-rental dining, and in-home meal prep across Spotsylvania County.",
  },
  {
    city: "Northern Virginia",
    path: "/private-chef-northern-virginia/",
    title: "Destination-worthy dining brought to your table",
    copy:
      "Private dining, corporate hospitality, and special-event menus available across Northern Virginia with travel quoted by location.",
  },
  {
    city: "Lake Anna",
    path: "/private-chef-lake-anna-va/",
    title: "Vacation-rental dining for lake weekends and celebrations",
    copy:
      "Private chef dinners for Lake Anna vacation rentals, birthdays, family trips, reunions, and group weekends without leaving the property.",
  },
  {
    city: "King George & Caroline",
    title: "Private chef experiences in nearby communities",
    copy:
      "Comfortable, polished service for birthdays, anniversaries, brunches, family-style meals, and vacation-rental stays.",
  },
  {
    city: "Virginia Destinations",
    title: "Vacation-rental dining without leaving the property",
    copy:
      "Bring a restaurant-quality experience to your rental home with customized menus, on-site cooking, service, and cleanup.",
  },
];

const faqs = [
  {
    question: "What areas does The Hosting Table Co. serve in Virginia?",
    answer:
      "Chef Jimmy is based in Fredericksburg and serves Fredericksburg, Stafford, Spotsylvania, Northern Virginia, and nearby destinations. Travel availability and fees depend on the event location.",
  },
  {
    question: "Do you cook for Virginia vacation rentals and Airbnbs?",
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
        <p className="eyebrow">Virginia Service Areas</p>
        <h2>Private chef services in Fredericksburg, Stafford, Spotsylvania & Northern Virginia.</h2>
        <p>
          The Hosting Table Co. is based in Fredericksburg, Virginia and serves the Fredericksburg region, Northern Virginia,
          and nearby destinations with private dinners, vacation rental dining, weekly meal prep, brunch experiences,
          corporate dining, and family-style gatherings.
        </p>
      </div>

      <div className="service-area-grid">
        {serviceAreas.map((area) => (
          <article className="service-area-card" key={area.city}>
            <h3>{area.path ? <a href={area.path}>{area.city}</a> : area.city}</h3>
            <strong>{area.title}</strong>
            <p>{area.copy}</p>
            {area.path && <a className="area-learn-more" href={area.path}>Explore {area.city} private chef service →</a>}
          </article>
        ))}
      </div>

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
