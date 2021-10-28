import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react';
import { setPage } from '../slices/pageSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';

function Milestone({user, milestones, getAccomplishedMilestones}) {
  const dispatch = useDispatch();

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

  const accomplishedMilestones = getAccomplishedMilestones(user.refill_amount, milestones)


  return (
    <div>
      {accomplishedMilestones.map((milestone, idx) => (
        <Card
          bg="Primary"
          key={idx}
          style={{ width: '18rem', margin: '15px', display: 'flex', flexWrap: 'wrap' }}
          className="mb-2"
        >
          <Card.Header>{milestone.Type}</Card.Header>
          <Card.Body>
            <Card.Title>{milestone.Name}</Card.Title>
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
          onClick={() => dispatch(setPage(false))}
        >
          Home
        </Button>
    </div>
  );
}

export default Milestone;
