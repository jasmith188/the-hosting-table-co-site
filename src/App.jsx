import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import MenuSection from "./components/MenuSection.jsx";
import MealPrep from "./components/MealPrep.jsx";
import Gallery from "./components/Gallery.jsx";
import ServiceDetails from "./components/ServiceDetails.jsx";
import LocalSeoSection from "./components/LocalSeoSection.jsx";
import ConversionBanner from "./components/ConversionBanner.jsx";
import Reviews from "./components/Reviews.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <ConversionBanner />
      <LocalSeoSection />
      <MenuSection />
      <MealPrep />
      <Gallery />
      <ServiceDetails />
      <Reviews />
      <ContactForm />
      <Footer />
    </main>
  );
}
