import './App.css';
import Carousels from './components/Carousels';
import Button from 'react-bootstrap/Button'
import Milestone from './components/Milestone';
import { useState, useEffect } from 'react'
import axios from 'axios';
import { setPage } from './slices/pageSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';



function App() {

  const [milestones, setMilestones] = useState([]);
  const [user, setUser] = useState({});
  const page = useSelector(state => state.page)
  const dispatch = useDispatch();
  const [userMilestones, setUserMilestones] = useState(["stone1","stone2"])

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

  function milestoneCheck(){
    const accomplished = ["check if working"]

    //Water
    const waterStones = milestones.filter((stone)=> {
      if(stone.type === "Water" && stone.Goalvalue <= user.refill_amount){
        return stone
      }
    });
    //C02
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

  const handleUserChange = (changedUser) => {
    setUser(changedUser);
  }

  return (
    <div>
      <header>
        <h1>my mizu: {user.id}</h1>
      </header>
      <main className="App-main">
        <section className={page ? "hide" : ""}>
          <Carousels user={user} 
            handleUserChange={handleUserChange} 
            userMilestones={userMilestones}
            milestoneCheck={milestoneCheck}
            />
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
          <Milestone 
            userMilestones={userMilestones}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
