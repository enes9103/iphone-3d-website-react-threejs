import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import SoundSection from "./components/SoundSection";
import DisplaySection from "./components/DisplaySection";
import WebgiView from "./components/WebgiView";

function App() {
  return (
    <div className="App">
      <Nav />
      <Jumbotron />
      <SoundSection />
      <DisplaySection />
      <WebgiView />
    </div>
  );
}

export default App;
