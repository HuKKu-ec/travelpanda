import './App.css';
import ContentList from './components/ContentList';
import Footer from './components/Footer';

import Header  from './components/Header';
import OtherExp from './components/OtherExp';
function App() {
  return (
    <div className="App">
      <Header/>
      <ContentList/>
      <OtherExp/>
      <Footer/>
      

    </div>
  );
}

export default App;
