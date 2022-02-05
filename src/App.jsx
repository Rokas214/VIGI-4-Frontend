import { useState } from "react/cjs/react.development";
import "./App.css";
import PhotoInput from "./components/PhotoInput";



function App() {

  const [getSrc, setSrc] = useState()
  const [getInputs, setInputs] = useState()
  const [getNotification, setNotification] = useState()


	return (
    <div className='App'>
        <PhotoInput getSrc={getSrc} setSrc={setSrc} 
        getInputs={getInputs} setInputs={setInputs} 
        getNotification={getNotification} setNotification={setNotification} />
    </div>
  )
}

export default App;
