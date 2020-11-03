import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import ScotchInfoBar from './ScotchInfoBar';
import './styles.css';

function App() {
  const [offsetTop, setOffsetTop] = useState(300);

  function MoveBoxUp(){
    setOffsetTop(offsetTop - 50);
  }
  return (
    <div className="App">
      <h1>Move the Box!</h1>

      {/* handle the click event on this button */}
      <button onClick={MoveBoxUp}>👆 Move Up 👆</button>

      {/* move this box using inline styles */}
      <div className="box" style={{
        transform: `translateY(${offsetTop}px)`
      }} />

      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
