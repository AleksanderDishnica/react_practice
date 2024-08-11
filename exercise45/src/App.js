import logo from './logo.svg';
import './App.css';
import Table from './components/Table';

function App() {
  const table = [
    {
      name: 'Peter',
      lecture: 'React',
      credits: 20
    },
    {
      name: 'John',
      lecture: 'Chemistry',
      credits: 5
    },
    {
      name: 'Maria',
      lecture: 'Math',
      credits: 10
    },
    {
      name: 'Klaudia',
      lecture: 'Physics',
      credits: 15
    },
    {
      name: 'Mark',
      lecture: 'History',
      credits: 10
    }
  ]

  return (
    <div className="App">
      <Table data={table} />
    </div>
  );
}

export default App;
