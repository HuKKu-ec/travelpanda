import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import Header  from './components/Header';
import Experience from './pages/Experience';
import Location from './pages/Location';
import Dates from './pages/Dates';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
<BrowserRouter>
        <Header/>
        <div>
          <Routes>
            <Route exact={true} path="/" element={<Experience/>} />
            <Route exact={true} path="/experiences" element={<Experience/>} />
            <Route exact={true} path="/location" element={<Location/>}/>
            <Route exact={true} path="/dates" element={<Dates/>}  />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
