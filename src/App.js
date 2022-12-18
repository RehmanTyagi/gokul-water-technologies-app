import "./App.css";
import TopHeader from "./components/topHeader";
import Navbar from "./components/navbar";
import HeroSlider from "./components/heroSlider";
import Spinner from "./components/spinner";
function App() {
  return (
    <div>
      {/* <NewsLetter /> */}
      <TopHeader />
      <Navbar />
      <HeroSlider />
    </div>
  );
}

export default App;
