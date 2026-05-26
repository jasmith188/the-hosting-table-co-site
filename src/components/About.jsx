import chefJimmy from "../assets/chef-jimmy.jpeg";

export default function About() {
  return (
    <section className="about section-wrap" id="about">
      <div className="about-copy">
        <p className="eyebrow">About Chef Jimmy</p>
        <h2>Refined private dining with polished, personal hospitality.</h2>
        <p>
          With nearly 20 years of culinary experience across fine dining, upscale casual,
          and high-volume kitchens, Chef Jimmy Smith creates elevated in-home dining
          experiences tailored to each client and occasion.
        </p>
        <p>
          From intimate date nights and multi-course plated dinners to corporate gatherings
          and family-style celebrations, every menu is customized around seasonality,
          guest preferences, and polished hospitality.
        </p>
      </div>
      <img src={chefJimmy} alt="Chef Jimmy Smith wearing a brown apron" className="chef-photo" />
    </section>
  );
}
