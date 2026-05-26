export default function MealPrep() {
  return (
    <section className="meal-prep-section section-wrap" id="meal-prep">
      <div className="meal-prep-copy">
        <p className="eyebrow">In-Home Meal Prep</p>
        <h2>Weekly meals prepared in your kitchen.</h2>
        <p>
          The Hosting Table Co. also offers in-home meal preparation for busy families,
          professionals, new parents, and anyone who wants chef-prepared meals ready for the week.
        </p>
        <p>
          Chef Jimmy can cook in your home, package meals for easy reheating, label everything clearly,
          and leave your kitchen cleaned up before leaving.
        </p>
        <p className="postpartum-note">
          Postpartum and new parent services are available, with nourishing comfort-focused meals,
          freezer-friendly options, and flexible menus built around family preferences.
        </p>
      </div>

      <div className="meal-prep-cards">
        <article>
          <h3>3 Meals / Week</h3>
          <p className="price">Starting at $225–$325</p>
          <p>Great for light weekly support, lunches, or a few ready-to-heat dinners.</p>
        </article>

        <article>
          <h3>4 Meals / Week</h3>
          <p className="price">Starting at $300–$425</p>
          <p>Ideal for couples, small families, or anyone wanting more consistent weekly coverage.</p>
        </article>

        <article>
          <h3>5 Meals / Week</h3>
          <p className="price">Starting at $375–$550</p>
          <p>Best for full weekly meal support, postpartum care, or busy family schedules.</p>
        </article>

        <p className="meal-prep-disclaimer">
          Pricing varies by portions, dietary needs, groceries, travel, packaging, and menu complexity.
          Grocery cost is separate unless quoted otherwise.
        </p>
      </div>
    </section>
  );
}
