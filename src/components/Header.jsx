export default function Header() {
  return (
    <header className="site-header">
      <a href="#top" className="header-logo-link" aria-label="The Hosting Table Co. home">
        <img src="/the-hosting-table-co-dijon-logo.png" alt="The Hosting Table Co." className="header-logo" />
      </a>

      <nav className="header-nav" aria-label="Main navigation">
        <a href="/#service-areas">Service Areas</a>
        <a href="/#menus">Menus</a>
        <a href="/#meal-prep">Meal Prep</a>
        <a href="/#reviews">Reviews</a>
        <a href="tel:+16084770652">Call</a>
        <a className="nav-cta" href="#contact">Inquire</a>
      </nav>
    </header>
  );
}
