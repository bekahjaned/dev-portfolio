import './App.css';
import NavBar from './Components/NavBar/';
import Header from './Components/Header/';
import About from './Components/About/';
import Work from './Components/Work/';
import Skills from './Components/Skills/';
import Contact from './Components/Contact/';
import Footer from './Components/Footer/';

function App() {
  const theme = {
    blue: {
      background: "#156E78",
      color: "#FBFEF9",
      link: "#F8FAA2",
      linkHover: "#ECEF4C"
    },
    white: {
      background: "#FBFEF9",
      color: "#0A100D",
      link: "#8C244D",
      linkHover: "#590928"
    }
  };

  return (
    <div>
      <NavBar />
      <Header theme={theme.white} />
      <About theme={theme.blue} />
      <Work theme={theme.white} />
      <Skills theme={theme.blue} />
      <Contact theme={theme.white}/>
      <Footer />
    </div>
  );
};

export default App;
