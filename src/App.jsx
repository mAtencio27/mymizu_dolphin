import './App.css';
import Carousels from './components/Carousels';
import Button from 'react-bootstrap/Button'
import Milestone from './components/Milestone';
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

  const accomplishedMilestones = getAccomplishedMilestones(user.refill_amount, milestones)
  // const handleAlert = () => {
    //   if (accomplishedMilestones.length) {
      //     setShow(true);
      //   }
      // }
      // if the milestone updated ---> if the length change, setShow(true)
      // if user close the alert setShow(false)
      
      
      // const now = new Date();
      // const greet = () => {
        //   if(now.getHours() <= 3 && now.getHours() >= 17) {
  //     return 'Good evening, '
  //   } else if (now.getHours() >= 4 && now.getHours() <= 9) {
  //     return 'Good morning, '
  //   } else if (now.getHours() >= 10 && now.getHours() <= 12) {
  //     return 'Hello, '
  //   } else {
  //     return 'Good afternoon, '
  //   }
  // }
  
  return (
    <div>
      <header>
        <h1>mymizu Milestones</h1>
      </header>
      <main className="App-main">
        {/* <AlertFunc 
        user={user}
        milestones={milestones}
        getAccomplishedMilestones={getAccomplishedMilestones}
      /> */}
        {/* {accomplishedMilestones.length ?  
          <Alert
            variant="info"
            show={true}
            onClose={() => {
              setShow(false)
              // accomplishedMilestones = [];
            }}
            style={{ width: '90%', marginLeft: '14px' }}
            dismissible
          >You've reached Milestone🎉</Alert> 
           : null}  */}
        <section className={page ? "hide" : ""}>
          <Carousels user={user}
            handleUserChange={handleUserChange}
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
            // style={{display: 'block', margin: '0 auto'}}
          >
            Check Milestone
          </Button>
        </div>
        <section className={!page ? "hide" : ""}>
          <Milestone
            user={user}
            milestones={milestones}
            getAccomplishedMilestones={getAccomplishedMilestones}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
