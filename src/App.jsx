import './App.css';
import Carousels from './components/Carousels';
// import Refill from './components/Refill';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Milestone from './components/Milestone';
import { useState, useEffect} from 'react'
import axios from 'axios';

function App() {

  const [milestones, setMilestones] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const grab = async () =>{
      try {
        const stones = await axios.get("/api/milestones")
        setMilestones(stones.data);
      }
      catch (err) {
        console.error("Failed to get milestones", err)
      }
    }
    grab()
  },[])

  useEffect(() => {
    const grab = async () =>{
      try {
        const user = await axios.get("/api/me")
        setUser(user.data);
      }
      catch (err) {
        console.error("Failed to get user", err)
      }
    }
    grab()
  },[])


  return (
    <BrowserRouter>
      <Switch>
      <div>
        <header>
          <h1>my mizu: {user.id}</h1>
        </header>
        <main className="App-main">
          {/* <Carousels />
          <Refill /> */}
          <Route exact path={"/"} component={Carousels} />
          <Route exact path={"/milestone"} component={Milestone}/>
        </main>
      </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
