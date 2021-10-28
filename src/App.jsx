import './App.css';
import Carousels from './components/Carousels';
import Button from 'react-bootstrap/Button'
import Milestone from './components/Milestone';
import AlertFunc from './components/AlertFunc';
import { useState, useEffect } from 'react'
import axios from 'axios';
import { setPage } from './slices/pageSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Alert from 'react-bootstrap/Alert'



function App() {

  const [milestones, setMilestones] = useState([]);
  const [user, setUser] = useState({});
  const page = useSelector(state => state.page)
  const dispatch = useDispatch();
  const [userMilestones, setUserMilestones] = useState(["stone1", "stone2"])
  const [show, setShow] = useState(false);

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

  const getAccomplishedMilestones = (refill_amount, allMilestones) => {
    const convertRefillToUOM = (type, refill_amount) => {
      switch (type) {
        case "Water":
          return refill_amount;
        case "Plastic":
          return refill_amount * 0.02; // 1L of water saves 20g of plastic
        case "CO2":
          return refill_amount * 0.1656; // carbon footprint per liter
        case "Money":
          return refill_amount * 200; // 200 yen per liter
        default:
          return null;
      }
    }

    // Check if we have reached milestones
    return allMilestones.filter((stone) => convertRefillToUOM(stone.Type, refill_amount) >= stone.GoalValue)
  }


  const handleUserChange = (changedUser) => {
    setUser(changedUser);
  }

  const milestoneButtonHandler = () => {
    dispatch(setPage(true))
  }

  
  let accomplishedMilestones = getAccomplishedMilestones(user.refill_amount, milestones)
  // const handleAlert = () => {
  //   if (accomplishedMilestones.length) {
  //     setShow(true);
  //   }
  // }

  return (
    <div>
      <header>
        <h1>my mizu: {user.id}</h1>
      </header>
      <main className="App-main">
        {/* <AlertFunc 
        user={user}
        milestones={milestones}
        getAccomplishedMilestones={getAccomplishedMilestones}
      /> */}
        {accomplishedMilestones.length ?
        <div className={page ? "hide" : ""}>
          <Alert
            variant="info"
            show={true}
            onClose={() => {
              // setShow(false)
              accomplishedMilestones = [];
            }}
            // onClick={() => dispatch(setPage(false))}
            style={{ width: '90%', marginLeft: '14px' }}
            dismissible
          >You've reached Milestone!</Alert></div>
          : null}
        <section className={page ? "hide" : ""}>
          <Carousels user={user}
            handleUserChange={handleUserChange}
            userMilestones={userMilestones}
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
            onClick={milestoneButtonHandler}
          >
            Check Milestone
          </Button>
        </div>
        <section className={!page ? "hide" : ""}>
          <Milestone
            user={user}
            milestones={milestones}
            getAccomplishedMilestones={getAccomplishedMilestones}
          // handleAccomplished={handleAccomplished}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
