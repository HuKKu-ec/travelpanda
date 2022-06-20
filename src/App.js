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
            <Route exact={true} path="/" element={<Experience/>} />
            <Route exact={true} path="/experiences" element={<Experience/>} />
            <Route exact={true} path="/Location"/>
            <Route exact={true} path="/Dates"  />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
