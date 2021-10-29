import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import Refill from './Refill';
import { useState } from 'react';
import water from '../images/spray.jpg'
import co2 from '../images/avenue.jpg'
import money from '../images/money-3.jpg'
import plastic from '../images/watering-can.jpg'

function Carousels({ user, handleUserChange }) {
  const [stone, setStones] = useState(0);
  const handleStoneChange = (changedUser) => {
    setStones(changedUser.refill_amount)
  }

  return (
    <div>
    <style type="text/css">
          {`
          @import url('https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap');
    `}
        </style>
      <Carousel interval="10000">
        <Carousel.Item style={{ maxHeight: '580px' }}>
          <img
            className="d-block w-100"
            src={water}
            alt="water"
          />
          <Carousel.Caption>
            <h3 style={{ fontWeight: 'bolder', fontSize: '40px', textShadow: '2px 2px 4px black', fontFamily: 'Bree Serif, serif' }}>I've saved {stone} L water!</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{ maxHeight: '580px' }}>
          <img
            className="d-block w-100"
            src={co2}
            alt="co2"
          />

          <Carousel.Caption>
            <h3 style={{ fontWeight: 'bolder', fontSize: '40px', textShadow: '2px 2px 4px black', fontFamily: 'Bree Serif, serif' }}>I've saved {(Math.round(stone * 0.1656 * 10)) / 10} kg of CO2!</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{ maxHeight: '580px' }}>
          <img
            className="d-block w-100"
            src={plastic}
            alt="plastic"
          />
          <Carousel.Caption>
            <h3 style={{ fontWeight: 'bolder', fontSize: '40px', textShadow: '2px 2px 4px black', fontFamily: 'Bree Serif, serif' }}>I've saved {(Math.round(stone * 0.02 * 10)) / 10} kg of Plastic!</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{ maxHeight: '580px' }}>
          <img
            className="d-block w-100"
            src={money}
            alt="money"
          />
          <Carousel.Caption>
            <h3 style={{ fontWeight: 'bolder', fontSize: '40px', textShadow: '4px 4px 4px black', fontFamily: 'Bree Serif, serif' }}>I've saved {stone * 200} yen!</h3>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
      <Refill user={user}
        handleUserChange={handleUserChange}
        handleStoneChange={handleStoneChange}
      />
    </div>
  );
}

export default Carousels;
