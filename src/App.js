import "./App.css";
import TopHeader from "./components/topHeader";
import Navbar from "./components/navbar";
import HeroSlider from "./components/heroSlider";
import Services from "./components/services/services";
import ClientSection from "./components/clients/clients-section";
import CompanyMileStone from "./components/company-milestone";
function App() {
  return (
    <div>
      {/* <NewsLetter /> */}
      <TopHeader />
      <Navbar />
      <HeroSlider />
      <Services />
      <CompanyMileStone />
      <ClientSection />
    </div>
  );
}

export default App;
