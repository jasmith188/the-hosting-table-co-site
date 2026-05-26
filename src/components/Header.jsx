export default function Header() {
  return (
    <header className="site-header">
      <a href="#top" className="header-logo-link" aria-label="The Hosting Table Co. home">
        {/* <img src="/the-hosting-table-co-black-logo.png" alt="The Hosting Table Co." className="header-logo" /> */}
      </a>

      <nav className="header-nav" aria-label="Main navigation">
        <a href="#menus">Menus</a>
        <a href="#meal-prep">Meal Prep</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Inquire</a>
      </nav>
    </header>
  );
}
