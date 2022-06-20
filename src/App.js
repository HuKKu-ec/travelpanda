import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import Header  from './components/Header';
import Experience from './pages/Experience';

function App() {
  return (
    <div className="App">


<BrowserRouter>
<Header/>
        <div>
          <Routes>
            <Route exact path="/" element={<Experience/>} />
            <Route exact path="/experiences" element={<Experience/>} />
            <Route exact path="/Location"/>
            <Route exact path="/Dates"  />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
