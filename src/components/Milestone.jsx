import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Milestone() {
  
  const history = useHistory();
  const changeView = () => {
    history.push("/");
  }

  const colors = [
    'Primary',
    'Secondary',
    'Success',
    'Danger',
    'Warning',
    'Info',
    'Light',
    'Dark',
  ];

  const [userMilestones, setuserMilestones] = useState([])

  useEffect(() => {
    const grab = async () =>{
      try {
        const userStones = await axios.get(`/api/usermilestones/${32}`)
        setuserMilestones(userStones.data);
      }
      catch (err) {
        console.error("Failed to get user milestones", err)
      }

    }
    grab()
  },[])



  return (
    <div>
      {colors.map((variant, idx) => (
        <Card
          bg={variant.toLowerCase()}
          key={idx}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem', margin: '15px', display: 'flex', flexWrap: 'wrap' }}
          className="mb-2"
        >
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>{variant} Card Title </Card.Title>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
            </Card.Text> */}
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
    `}
        </style>

        <Button variant="milestone"
          size="xxl"
          className="log-refill"
          onClick={changeView}
        >
          Home
        </Button>
    </div>
  );
}

export default Milestone;
