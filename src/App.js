import logo from './Me.png';
import './App.css'
import ReactFloaterJs from 'react-floaterjs'


function App() {
  return (
    <div className="App"> 
    <ReactFloaterJs>
    <div className="Pic">
      <img src={logo} className="Me" alt="logo" />
    </div>
    </ReactFloaterJs>

    <div className="Info">
      <h1> Owusu Bonsu's Portfolio </h1>
      <p> idk what to put here yet lmao </p>
    </div>

    </div>
  );
}

export default App;
