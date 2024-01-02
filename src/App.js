import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navs from './components/Navs';
import Help from './components/Help';
import Process from './components/Process';
import Slids from './components/Slids';
import Faster from './components/Faster';
import Footer from './components/Footer';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <div>
      <Navs />
      <Help />
      <Process />
      <Slids />
      <Faster />
      <Footer/>
    </div>
  );
}

export default App;
