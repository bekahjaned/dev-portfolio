import './App.css';
import NavBar from './Components/NavBar/'
import Header from './Components/Header/'
import About from './Components/About/'
import Work from './Components/Work/'

function App() {
  const theme = {
    blue: {
      background: "#156E78",
      color: "#FBFEF9"
    },
    white: {
      background: "#FBFEF9",
      color: "#0A100D"
    }
  }

  return (
    <div>
      <NavBar />
      <Header />
      <About theme={theme.blue} />
      <Work />
    </div>
  );
}

export default App;
