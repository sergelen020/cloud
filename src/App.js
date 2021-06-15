import { firestore } from "./firebase"
import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import axios from'axios';


function App() {
  const [qrImage, setQrImage] = useState()
  const onButtonClick = async() => {
    const response = await axios.post('https://us-central1-project-1-aad15.cloudfunctions.net/shop_create_invoice', {
      price: 5000, 
      description: 'blah blah',
      name: 'blah blah'
    })

    const { qr, invoiceId } = response.data
    
    setQrImage(qr)

    firestore.doc(`invoices/${ invoiceId }`).onSnapshot((doc) => {
      console.log('snapshot')
    })

    console.log(qr)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={qrImage ? qrImage : logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={ onButtonClick }>click me!</button>
      </header>
    </div>
  );
}

export default App;
