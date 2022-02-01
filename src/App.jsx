import { useState } from "react/cjs/react.development";
import "./App.css";
import PhotoInput from "./components/PhotoInput";



function App() {

  const [getSrc, setSrc] = useState()


	return (
    <div className='App'>
        <PhotoInput getSrc={getSrc} setSrc={setSrc} />
    </div>
  )
}

export default App;
