import './App.css';
import Carousels from './components/Carousels';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Milestone from './components/Milestone';
import { useState, useEffect } from 'react'
import axios from 'axios';


function App() {

  const [milestones, setMilestones] = useState([]);
  const [user, setUser] = useState({});
  const [refill, serRefill] = useState(0);

  useEffect(() => {
    const grab = async () => {
      try {
        const stones = await axios.get("/api/milestones")
        setMilestones(stones.data);
      }
      catch (err) {
        console.error("Failed to get milestones", err)
      }
    }
    grab()
  }, [])

  useEffect(() => {
    const grab = async () => {
      try {
        const user = await axios.get("/api/me")
        setUser(user.data);
      }
      catch (err) {
        console.error("Failed to get user", err)
      }
    }
    grab()
  }, [])

  const handleUserChange = (changedUser) => {
    setUser(changedUser);
  }

  return (
    <BrowserRouter>
      <header>
        <h1>my mizu: {user.refill_amount}</h1>
      </header>
      <Switch>
        <main className="App-main">
          <Route path="/">
            <Carousels user={user} handleUserChange={handleUserChange}/>
          </Route>
          <Route path="/milestone">
            <Milestone />
          </Route>
        </main>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
