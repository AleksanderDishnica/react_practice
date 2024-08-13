import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://strangerthingsquotes.vercel.app/api/quotes/100')
      .then(response => {
        setQuotes(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>There was an error fetching the quotes.</p>;

  return (
    <div>
      <h1>Stranger Things Quotes</h1>


      <Container>
        <Row>
          {quotes.map((quote, index) => {
            return <Col md={4} key={index}><strong>{quote.author}</strong>: {quote.quote}</Col>
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
