export default function Footer() {
  return (
    <footer>
      <p className="footer-brand">The Hosting Table Co.</p>
      <p>
        Private chef services by Chef Jimmy |{" "}
        <a href="tel:+15403108358">540-310-8358</a> |{" "}
        <a href="mailto:booking@thehostingtableco.com">booking@thehostingtableco.com</a>
        <br />
        See you at the table.
        <br />
        <a href="https://www.instagram.com/thehostingtableco/" target="_blank" rel="noopener noreferrer">Follow on Instagram</a>
        <br />
        © {new Date().getFullYear()} The Hosting Table Co. 
      </p>
    </footer>
  );
}
