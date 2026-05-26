import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import MenuSection from "./components/MenuSection.jsx";
import MealPrep from "./components/MealPrep.jsx";
import Gallery from "./components/Gallery.jsx";
import ServiceDetails from "./components/ServiceDetails.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <MenuSection />
      <MealPrep />
      <Gallery />
      <ServiceDetails />
      <ContactForm />
      <Footer />
    </main>
  );
}
