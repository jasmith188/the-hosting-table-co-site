import { useState } from "react";
import MenuCard from "./MenuCard.jsx";
import { seasons, getCurrentSeason, getMenus } from "../data/seasonalMenus.js";
import "../styles/seasonal-menus.css";

export default function MenuSection() {
  const [season, setSeason] = useState(getCurrentSeason);
  const selectedSeason = seasons.find((item) => item.id === season);
  return (
    <section className="section-wrap thc-seasonal-menus" id="menus" aria-labelledby="thc-menu-heading">
      <p className="eyebrow">At the table · Sample menus</p>
      <h2 className="section-title" id="thc-menu-heading">Your favorite flavors. A menu for the season.</h2>
      <p className="thc-menu-intro">
        Explore signature dishes from Chef Jimmy’s dinners alongside seasonal menu ideas.
        Open a cuisine below, then we’ll build your menu around the occasion—whether you’re
        planning a plated dinner or passing dishes around the table.
      </p>
      <div className="thc-season-picker">
        <label htmlFor="thc-menu-season">Explore a season</label>
        <select id="thc-menu-season" value={season} onChange={(event) => setSeason(event.target.value)}>
          {seasons.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}
        </select>
        <p aria-live="polite">{selectedSeason.note}</p>
      </div>
      <div className="thc-menu-collection" key={season}>
        {getMenus(season).map((menu) => <MenuCard key={menu.id} menu={menu} />)}
      </div>
      <div className="thc-menu-note">
        <h3>Let’s make it your menu.</h3>
        <p>
          Mix cuisines, request a favorite dish, or ask about vegetarian options. These are sample menus;
          ingredients and seafood vary with availability. Share allergies and dietary needs when you inquire
          so we can discuss suitable options before confirming your menu.
        </p>
        <a className="button-dark" href="#contact">Plan Your Menu</a>
      </div>
    </section>
  );
}
