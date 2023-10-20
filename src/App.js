import Intro from "./pages/Intro";
import Navbar from "./components/Navbar";
import SkillsComponent from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/About";
import ContactForm from "./pages/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro/>
      <Skills />
      <SkillsComponent/>
      <Portfolio />
      <ContactForm/>
      
    </div>
  );
}

export default App;
