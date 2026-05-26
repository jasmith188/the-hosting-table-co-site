import MenuCard from "./MenuCard.jsx";
import { menus } from "../data/menus.js";

export default function MenuSection() {
  return (
    <>
      <section className="section-wrap" id="menus">
        <p className="eyebrow">Dining Experiences</p>
        <div className="menus-grid">
          {menus.map((menu) => (
            <MenuCard key={menu.title} menu={menu} />
          ))}
        </div>
      </section>

      <section className="custom-menu-note section-wrap">
        <p>
          Menus are starting points only. Every private dining experience can be customized around
          guest preferences, seasonal ingredients, allergies, dietary needs, and the style of event.
          Clients may swap courses, adjust ingredients, or build a completely custom menu with Chef Jimmy.
        </p>
      </section>
    </>
  );
}
