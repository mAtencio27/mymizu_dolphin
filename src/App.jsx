import './App.css';
import Carousels from './components/Carousels';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Milestone from './components/Milestone';
import { useState, useEffect } from 'react'
import axios from 'axios';
import milestone from './slices/milestone';


function App() {

  const [milestones, setMilestones] = useState([]);
  const [user, setUser] = useState({});
  const [refill, serRefill] = useState(0);
  const [userMilestones, setUserMilestones] = useState([{id:1},{id:2}])

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
    /****************/console.log(milestoneCheck())/***********************************/
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

  useEffect(() => {
    const grab = async () => {
      try {
        const userStones = await axios.get(`/api/usermilestones/${user.id}`)
        setUserMilestones(userStones.data)
      }
      catch (err) {
        console.error("cannot find the stones",err)
      }
    }
    grab()
  }, [] )

  const handleUserChange = (changedUser) => {
    setUser(changedUser);
  }

  function milestoneCheck(){
    const accomplished = []
    for(let milestone of milestones){
      accomplished.push(milestone)
    }
    const waterStones = milestones.filter((stone)=> {
      if(stone.type === "Water" && stone.Goalvalue <= user.refill_amount){
        return stone
      }
    });
    const carbonStones = milestones.filter((stone) => {
      if(stone.type === "CO2" && stone.Goalvalue <= user.refill_count*.083){
        return stone
      }
    });
    ///money
    const moneyStones = milestones.filter((stone) => {
      if(stone.type === "Money" && stone.Goalvalue <= user.refill_count*100)
      return stone
    });
    //plastic
    const plasticStones = milestones.filter((stone) => {
      if(stone.type === "Plastic" && stone.Goalvalue <= user.refill_count*.0925)
      return stone
    })
    return accomplished
  };

  return (
    <BrowserRouter>
      <header>
        <h1>my mizu: {user.refill_amount}</h1>
      </header>
      <Switch>
        <main className="App-main">
          <Route path="/">
            <Carousels 
              user={user} 
              handleUserChange={handleUserChange}
              userMilestones={userMilestones}
              />
          </Route>
          <Route path="/milestone">
            <Milestone
              userMilestones={userMilestones}
            />
          </Route>
        </main>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
