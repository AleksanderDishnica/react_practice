import './App.css';
import { useState } from 'react'

function App() {
  const [read, setRead] = useState('Read more')

  const clicked = () => {
    if (read === 'Read more') {
      setRead('Read less')
    } else {
      setRead('Read more')
    }
  }

  return (
    <div className="App">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, omnis molestias dolore architecto animi iure consequuntur atque explicabo quos hic unde laborum. Placeat amet necessitatibus molestias rem nobis aliquam voluptatum?</p>
      <button onClick={clicked}>{read}</button>
      {read === 'Read more' ? ''
        : <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, omnis molestias dolore architecto animi iure consequuntur atque explicabo quos hic unde laborum. Placeat amet necessitatibus molestias rem nobis aliquam voluptatum?</p>
      }
    </div>
  );
}

export default App;
