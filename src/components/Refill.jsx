import { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Milestone from './Milestone';

function Refill() {
  const [view, setView] = useState("Home");

  const changeView = () => {
    setView("Milestone");
    console.log(view);
  }

  return (
    <div>
      <>
        <style type="text/css">
          {`
    .btn-refill {
      background-color: #56DCEB;
      color: white;
      font-weight: bolder;
      cursor: pointer;
      margin: 15px;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
      border-radius: 10px
    }
    `}
        </style>

        <Button variant="refill" size="xxl" className="log-refill">
          Log refill
        </Button>
      </>
      <>
        <style type="text/css">
          {`
    .btn-milestone {
      background-color: #149FD4;
      color: white;
      font-weight: bolder;
      cursor: pointer;
      margin: 15px;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
      border-radius: 10px
    }
    `}
        </style>

        <Button variant="milestone" size="xxl" className="log-refill"
          onClick={() => changeView()}
        >
          Check Milestone
        </Button>
        { view === "Milestone" ? <Milestone /> : null}
      </>
    </div>
  );
}

export default Refill;
