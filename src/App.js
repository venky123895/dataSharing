
import AA from './AllComponents/AA';
import './App.css';
import A from './Components/A';
function App() {
  return (
    <div className="App">
      <h1>Passing Data From Child To Parent</h1>
      <A/>
      <hr/>
      <h1>Passing Data from parent to Child</h1>
      <AA/>
    </div>
  );
}

export default App;
