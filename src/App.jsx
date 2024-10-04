import { useState, useEffect } from 'react';
import reactLogo from '/react.png';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const message = "We are Coming Soon..."; 
  const typingSpeed = 100; 

 
  useEffect(() => {
    const timer = setTimeout(() => {
      if (text.length < message.length) {
        setText((prevText) => prevText + message[text.length]);
      }
    }, typingSpeed);

    return () => clearTimeout(timer); 
  }, [text]);

  return (
    <>
      <div>
        <a href="" target="_blank">
         
        </a>
        <a href="" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{text}</h1>
    </>
  );
}

export default App;
