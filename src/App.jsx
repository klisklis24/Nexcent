import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Community from "./components/Community";
import CalendarTop from "./components/CalendarTop";
import Achievements from "./components/Achievements";
import CalendarBottom from "./components/CalendarBottom";
import Customers from "./components/Customers";
import Blogs from "./components/Blogs";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main>
      <NavBar />
      <div className="mt-24 mb-10">
        <Hero />
      </div>
      <Clients />
      <Community />
      <CalendarTop />
      <Achievements />
      <CalendarBottom />
      <Customers />
      <Blogs />
      <CTA />
      <Footer />
    </main>
  );
};

export default App;
