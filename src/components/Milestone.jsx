import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { setPage } from '../slices/pageSlice';
import { useDispatch } from 'react-redux';

function Milestone({user, milestones, getAccomplishedMilestones}) {
  const dispatch = useDispatch();

  const colors = (type) => {
    switch(type) {
      case "Water":
        return "primary";
      case "CO2":
        return "secondary"
      case "Plastic":
        return "success"
      case "Money": 
        return "warning"
      default: 
        return "light"
    }
  }

  const accomplishedMilestones = getAccomplishedMilestones(user.refill_amount, milestones)


  return (
    <div className="central">
    <Container fluid>
      {accomplishedMilestones.map((milestone, idx) => (
        <Card
          bg={colors(milestone.Type)}
          key={idx}
          text={milestone.Type === "Money" ? "black" :"white"}
          style={{  margin: '15px', display: 'flex', flexWrap: 'wrap' }}
          className="mb-2"
        >
          <Card.Header>{milestone.Type}</Card.Header>
          <Card.Body>
            <Card.Title>{milestone.Name}</Card.Title>
            Congratulations for reaching this milestone!
            <br/>
            {milestone.Message}
          </Card.Body>
        </Card>
      ))
      }
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

    .central {
      margin: auto;
  width: 50%;
    }
    `}
        </style>

        <Button variant="milestone"
          size="xxl"
          className="log-refill"
          onClick={() => dispatch(setPage(false))}
        >
          Home
        </Button>
    </Container>
    </div>

  );
}

export default Milestone;
