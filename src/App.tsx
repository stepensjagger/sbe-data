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
    event.preventDefault();
    const dataProcessed = DataProcessed(dataToLoop, timesToLoop);
    navigator.clipboard.writeText(dataProcessed.toString());
  };



  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="number"
          name="timesToLoop"
          id="timesToLoop"
          onChange={handleTimesToLoopChange}
        />
        <input
          name="dataToLoop"
          id="dataToLoop"
          onChange={handleDataToLoopChange}
        />
        <input type="submit" value="Submit" />
      </label>
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

export default App;
