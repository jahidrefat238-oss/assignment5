import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import TechnologyCard from "./components/TechnologySection/TechnologyCard/TechnologyCard";
import TechnologySection from "./components/TechnologySection/TechnologySection";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <TechnologySection></TechnologySection>
      <TechnologyCard></TechnologyCard>
    </div>
  );
}

export default App;
