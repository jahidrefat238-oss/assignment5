import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import TechnologySection from "./components/TechnologySection/TechnologySection";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
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
      <Suspense fallback={<p>Loading...</p>}>
        <TechnologySection technologyPromise={technologyPromise} />
      </Suspense>
       <ToastContainer></ToastContainer>
       <Footer></Footer>
    </div>
  );
}

export default App;
