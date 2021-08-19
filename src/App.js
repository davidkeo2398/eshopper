import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbarComponent/navbarComponent';
import Footer from './components/footerComponent/footerComponent';
import Slider from './components/sliderComponent/sliderComponent';
import Homepage from './components/homepageComponent/homepageComponent';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Slider></Slider>
      <Homepage></Homepage>
      <Footer></Footer>
    </div>
  );
}

export default App;
