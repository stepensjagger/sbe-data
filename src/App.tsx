import React, { useState } from 'react';

function App() {
  const [timesToLoop, setTimesToLoop] = useState<number>(0);
  const [dataToLoop, setDataToLoop] = useState<any>(null);

  const handleTimesToLoopChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimesToLoop(parseInt(event.target.value));
  };

  const handleDataToLoopChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataToLoop(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    const dataProcessed = DataProcessed(dataToLoop, timesToLoop).join("\n");
    navigator.clipboard.writeText(dataProcessed.toString());
    alert("The Data has Been Added to Clipboard\n (Press Any Key to Delete the Popup)")
  };




  return (
    <form onSubmit={handleSubmit} style={{alignContent:"center"}}>
      <div style={{alignContent:"center", textAlign:"center"}}>
        <h2>
          Times to Loop
          <br></br>
          <label >
            <input
              type="number"
              name="timesToLoop"
              id="timesToLoop"
              onChange={handleTimesToLoopChange}
            />
          </label>
        </h2>
        <h2>
          Data to Loop
          <br></br>
          <label>
            <input
              name="dataToLoop"
              id="dataToLoop"
              onChange={handleDataToLoopChange}
            />
            <br></br>
            <input type="submit" value="Submit" />
          </label>
        </h2>
      </div>
    </form>
  );
}

function DataProcessed(dataToLoop: any, timesToLoop: number): any[] {
  let dataStored: any[] = [];
  for (let i = 0; i < timesToLoop; i++) {
    dataStored.push(dataToLoop);
  }
  return dataStored;
}

DataProcessed("fdsa", 12).join("/n ")

export default App;
