import MenuCard from "./MenuCard.jsx";
import { menus } from "../data/menus.js";

export default function MenuSection() {
  return (
    <>
      <section className="section-wrap" id="menus">
        <p className="eyebrow">Dining Experiences</p>
        <h2 className="section-title">Sample private chef menus for Wisconsin dinners, Airbnb gatherings & weekly meal support.</h2>
        <div className="menus-grid">
          {menus.map((menu) => (
            <MenuCard key={menu.title} menu={menu} />
          ))}
        </div>
      </section>

      <section className="custom-menu-note section-wrap">
        <p>
          Menus are starting points only. Every private dining experience can be customized around
          guest preferences, seasonal ingredients, allergies, dietary needs, budget, service style, and the occasion.
          Clients may swap courses, adjust ingredients, or build a completely custom menu with Chef Jimmy.
        </p>
      </section>
    </>
  );
}
