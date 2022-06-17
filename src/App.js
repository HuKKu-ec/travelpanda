import './App.css';
import ContentList from './components/ContentList';
import Filter from './components/Filter';
import Header  from './components/Header';
function App() {
  return (
    <div className="App">
      <Header/>
      <div style={{display:'flex'}}>
      <Filter/>
      <ContentList/>
      </div>
      
      

    </div>
  );
}

export default App;
