import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Blog from "./components/Blog";
import Collaboration from "./components/Collaboration";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Feedback";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Pricing />
        <Roadmap />
        <Blog />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
