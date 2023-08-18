import './App.css';
import Header from './component/Header';
import Main from './component/Main';

function App() {
  return (
    //main component, holds the other components
    <div className="App">
      <Header />
      <Main />

    </div>
  );
}

export default App;
