import chefJimmy from "../assets/chef-jimmy.jpeg";

export default function About() {
  return (
    <section className="about section-wrap" id="about">
      <div className="about-copy">
        <p className="eyebrow">About Chef Jimmy</p>
        <h2>Refined private dining with polished, personal hospitality.</h2>
        <p>
          Based in Fredericksburg, Virginia, Chef Jimmy brings nearly 20 years of culinary experience across fine dining,
          upscale casual restaurants, private chef work, and high-volume kitchens to every in-home dining experience.
        </p>
        <p>
          From Fredericksburg vacation rental dinners and intimate date nights to Northern Virginia meal prep, corporate dining,
          and family-style celebrations, every menu is customized around seasonality, guest preferences, kitchen logistics,
          and polished hospitality.
        </p>
      </div>
      <img src={chefJimmy} alt="Chef Jimmy, private chef serving Fredericksburg and Northern Virginia" className="chef-photo" />
    </section>
  );
}
