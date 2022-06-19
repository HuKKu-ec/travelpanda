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
            <Route path="/" element={<Experience/>} />
            <Route path="/experiences" element={<Experience/>} />
            <Route path="/Location"/>
            <Route path="/Dates"  />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
