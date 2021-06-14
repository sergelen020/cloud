import logo from './logo.svg';
import './App.css';
import axios from'axios'

function App() {
  const onButtonClick = async() => {
    const { qr } = await axios.post('https://us-central1-project-1-aad15.cloudfunctions.net/shop_create_invoice', {
      price: 5000, 
      description: 'blah blah',
      name: 'blah blah'
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={ onButtonClick }>click me!</button>
      </header>
    </div>
  );
}

export default App;
