import logo from './logo.svg';
import Form from './components/Form';
import './components/left.css'

function App() {
  return (
    <div className="App">
      <div className="left">
        <div className="center">
          <h1>Travel</h1>
          <h1>Reservation</h1>
          <h1>Form</h1>
        </div>
      </div>
      <Form />
    </div>
  );
}

export default App;
