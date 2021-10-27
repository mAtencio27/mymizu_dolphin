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
    <div>
      <header>
        <h1>my mizu: {user.id}</h1>
      </header>
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
  );
}

export default App;
