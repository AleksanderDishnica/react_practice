import './App.css'

import Yachts from './components/Yachts';
import Navigation from './components/Navigation';
import Container from 'react-bootstrap/Container';

import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function App() {
  let admin = true;

  return (
    <>
      <Navigation />
      <Container>
        <main>
          {admin ? <Link to="/addYacht" className='p-0'><Button variant='success'>Add new yacht</Button></Link> : ''}
          <Yachts />
        </main>
      </Container>
    </>
  );
}

export default App;
