import './App.css';
import Carousels from './components/Carousels';
import Button from 'react-bootstrap/Button'
import Milestone from './components/Milestone';
import { useState, useEffect } from 'react'
import axios from 'axios';
<<<<<<< HEAD
import milestone from './slices/milestone';
=======
import { setPage } from './slices/pageSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

>>>>>>> master


function App() {

  const [milestones, setMilestones] = useState([]);
  const [user, setUser] = useState({});
<<<<<<< HEAD
  const [refill, serRefill] = useState(0);
  const [userMilestones, setUserMilestones] = useState([{id:1},{id:2}])
=======
  const page = useSelector(state => state.page)
  const dispatch = useDispatch();
>>>>>>> master

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
    <div>
      <header>
        <h1>my mizu: {user.id}</h1>
      </header>
<<<<<<< HEAD
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
=======
      <main className="App-main">
        <section className={page ? "hide" : ""}>
          <Carousels user={user} handleUserChange={handleUserChange} />
        </section>
        <style type="text/css">
          {`
    .btn-milestone {
      background-color: #149FD4;
      color: white;
      font-weight: bolder;
      cursor: pointer;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
      border-radius: 10px
    }
    `}
        </style>
        <div className={page ? "hide" : ""}>
          <Button variant="milestone"
            size="xxl"
            className="log-refill"
            onClick={() => dispatch(setPage(true))}
          >
            Check Milestone
          </Button>
        </div>
        <section className={!page ? "hide" : ""}>
          <Milestone />
        </section>
      </main>
    </div>
>>>>>>> master
  );
}

export default App;
