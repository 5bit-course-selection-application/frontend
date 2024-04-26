import React, { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    fetch('http://62.113.104.103:9000/docs')
    .then(
      res => console.log(res)
    )
    // .then(
    //   data => console.log(data)
    // )
  }, [])

  return (
    <div>

    </div>
  );
}

export default App;
