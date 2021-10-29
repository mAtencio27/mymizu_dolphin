import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { setPage } from '../slices/pageSlice';
import { useDispatch } from 'react-redux';

function Milestone({user, milestones, getAccomplishedMilestones}) {

  const accomplishedMilestones = getAccomplishedMilestones(user.refill_amount, milestones)
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

  const iconURLs = (milestoneName) => {
    switch(milestoneName) {
      case "Human Body": //Body
        return (<img src="https://img.icons8.com/external-becris-lineal-color-becris/64/000000/external-body-alternative-medicine-becris-lineal-color-becris.png" alt=""/>);
        case "Bathtub": //Bathtub
          return (<img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-bathtub-hotel-kiranshastry-lineal-color-kiranshastry.png" alt=""/>);
          case "Shower": //Shower
        return (<img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-shower-bathroom-kiranshastry-lineal-color-kiranshastry.png" alt=""/>);
        case "Hottub": //Hottub
        return (<img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-shower-bathroom-kiranshastry-lineal-color-kiranshastry.png" alt=""/>);
        case "Serving of Beef": //Beef
        return (<img src="https://img.icons8.com/cotton/64/000000/steak-medium.png" alt=""/>);
        case "Tennis Shoes": //Tennis Shoes
        return (<img src="https://img.icons8.com/ios-filled/50/000000/trainers.png" alt=""/>);
        case "Iphone": //Iphone
        return (<img src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/49/000000/external-iphone-devices-prettycons-lineal-color-prettycons-1.png" alt=""/>);
        case "Gardening Can": //Gardening Can
        return (<img src="https://img.icons8.com/color/50/000000/watering-can.png" alt=""/>);
        case "Reusable straw": //Reusable Straw
        return (<img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/50/000000/external-no-straws-ecology-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png" alt=""/>);
        case "Tote Bag": //Tote bag
        return (<img src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/50/000000/external-tote-bag-shopping-and-commerce-flatart-icons-lineal-color-flatarticons.png" alt=""/>);
        case "Hydroflask": //Hydroflask
        return (<img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/50/000000/external-bottle-outdoor-kiranshastry-lineal-color-kiranshastry.png" alt=""/>);
        case "Bicycle": //Bicycle
        return (<img src="https://img.icons8.com/dotty/50/000000/bicycle.png" alt=""/>);
        case "Electric Car": //Electric car
        return (<img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-electric-car-automobile-kiranshastry-lineal-color-kiranshastry-2.png" alt=""/>)
      default: 
      return "../images/icons/bathtub.png"        
    }
  }



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
          <Card.Header>{milestone.Type} <i className="bi bi-award"></i></Card.Header>
          <Card.Body>
            <Card.Title>{milestone.Name}</Card.Title>
            Congratulations for reaching this milestone!
            <hr/>
            {iconURLs(milestone.Name)}
            <br/><br/>
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
        <div className="d-grid gap-2">
          <Button variant="milestone"
            size="lg"
            className="log-refill"
            onClick={() =>dispatch(setPage(false))}
          >
            Home
          </Button>
        </div>
        <div><a href="https://icons8.com/">All Icons from Icons8</a></div>
    </Container>
    </div>

  );
}

export default Milestone;
