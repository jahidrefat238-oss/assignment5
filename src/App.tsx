import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import TechnologySection from "./components/TechnologySection/TechnologySection";

const getTechnologies = async () => {
  const response = await fetch("/data.json");
  const data = await response.json();

  return data;
};
const technologyPromise = getTechnologies();
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <TechnologySection technologyPromise={technologyPromise}></TechnologySection>
      
    </div>
  );
}

export default App;
