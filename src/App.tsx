import usestate from "react"




let timesToLoop:number;
let dataToLoop:any
let i:number
let dataStored: any[] = []

function DataProcessed(dataToLoop: any, timesToLoop: number){
  for(i = 0;i < timesToLoop; i++ ){
    dataStored.push(dataToLoop)
  }return dataStored
}



function App() {
  return (
    <form>
      <label>
        <input
          type="number"
          value={timesToLoop}>
        </input>
        <input
          value={dataToLoop}
        >  
        </input>
        <button onClick={()=>DataProcessed}>
          Submit Data
        </button>
      </label>
    </form>

  );
}

export default App;
