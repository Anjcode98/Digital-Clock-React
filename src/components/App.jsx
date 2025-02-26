import React, { useState } from "react";


function App() {

    //get the current time
  const now = new Date().toLocaleTimeString();

    //initialized the current time and update time when user clicked
  const [time, setTime] = useState(now);

    //call the updateTime function in every 1000ms.
  setInterval(updateTime, 1000);
 
    //call the updateTime func: when the user clicked
  function updateTime(){
  const newTime = new Date().toLocaleTimeString();
  setTime(newTime);
}

  
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
