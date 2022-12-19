import "./App.css";
import TopHeader from "./components/topHeader";
import Navbar from "./components/navbar";
import HeroSlider from "./components/heroSlider";
import Services from "./components/services/services";
function App() {
  return (
    <div>
      {/* <NewsLetter /> */}
      <TopHeader />
      <Navbar />
      <HeroSlider />
      <Services />
    </div>
  );
}

export default App;
