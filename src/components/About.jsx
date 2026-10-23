import chefJimmy from "../assets/chef-jimmy.jpeg";

export default function About() {
  return (
    <section className="about section-wrap" id="about">
      <div className="about-copy">
        <p className="eyebrow">Jimmy · Owner & Chef</p>
        <h2>Good food. Personal service. Time with your guests.</h2>
        <p>
          I’m Jimmy, the chef behind The Hosting Table Co. I’m based in Fredericksburg,
          Virginia, with nearly 20 years of experience in restaurant kitchens, fine dining,
          and private homes.
        </p>
        <p>
          I build each menu around the people at your table. That might mean a four-course
          birthday dinner, a relaxed family-style celebration, or meals prepared for a busy week.
          I handle the planning, shopping, cooking, and kitchen cleanup so you can enjoy the occasion.
        </p>
        <p>
          I cook throughout Fredericksburg, Stafford, Spotsylvania, Richmond, and Northern Virginia,
          including Alexandria, Arlington, and Ashburn. Tell me where you’re hosting and what you love to eat.
        </p>
      </div>
      <img src={chefJimmy} alt="Chef Jimmy, owner of The Hosting Table Co. in Fredericksburg, Virginia" className="chef-photo" loading="lazy" decoding="async" />
    </section>
  );
}
