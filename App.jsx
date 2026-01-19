import {useState} from 'react';

function App() {
  const [color,setColor]=useState("white");
  return (
    <div className="container"> 
    <h1>Picker</h1>
    <div className="btn-group">
      <button className="btn1" onClick={()=>setColor("red")}> Red</button>
      <button className="btn2" onClick={()=>setColor("blue")}> Blue</button>
      <button className="btn3" onClick={()=>setColor("green")}> Green</button>
    </div>
    <div className="color-box" style={{backgroundColor: color}}></div>
    </div>
  );
}

export default App;