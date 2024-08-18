import { useState, useEffect } from 'react'
import axios from 'axios';
import Nav1 from './components/Nav1';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:3001/api/yachts')
      .then(response => {
        setInfo(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>There was an error fetching yachts.</p>;

  return (
    <main>
      <Nav1 />
      <Container>
        <Row>
          {info.map((data, index) => {
            return (
              <Col key={index} lg={4} md={2} sm={1}>
                <Link to={data.id}>
                  <h1>{data.title}</h1>
                  <div className='contain'>
                    <Image className='w-100' src={data.img} to={data.id} />
                  </div>
                </Link>
              </Col>
            )
          })}
        </Row>
      </Container>
    </main>
  );
}

export default App;
