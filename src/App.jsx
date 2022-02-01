import { useEffect,useState } from "react/cjs/react.development";
import "./App.css";


function App() {

  const [userInputs, setUserInputs] = useState()

	return (
    <div className='App'>
      <form onSubmit={((e) => {
        e.preventDefault()
        console.log(userInputs)
        useEffect(() => {
          fetch("http://localhost:8080/post", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(userInputs)
          })
        },[])
      })} >

        <input type="text" placeholder="username" onChange={((e) => setUserInputs({...userInputs, username: e.target.value}))} />
        <input type="text" placeholder="password" onChange={((e) => setUserInputs({...userInputs, password: e.target.value}))} />
        <button type="submit" >Submit</button>


      </form>
    </div>
  )
}

export default App;
