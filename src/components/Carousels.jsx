import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import Refill from './Refill';
import { useState } from 'react';
import water from '../images/img_water_2.jpg'
import co2 from '../images/img_co2_1.jpg'
import money from '../images/img_money.jpg'
import plastic from '../images/img_plastic.jpg'

function Carousels({user, handleUserChange}) {
  const [stone, setStones] = useState(0);
  const handleStoneChange = (changedUser) => {
    setStones(changedUser.refill_amount)
  }

  return (
    <div>
      <div className='container-fluid' >
        <div className="row">
          <div className="col-sm-12">
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Carousel>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={water}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3 style={{fontWeight: 'bolder', fontSize: '36px', textShadow: '1px 1px 2px black'}}>I've saved {stone} L water!</h3>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={co2}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3 style={{fontWeight: 'bolder', fontSize: '36px', textShadow: '1px 1px 2px black'}}>I've saved {Math.round(stone * 0.1656)} kg of CO2!</h3>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={plastic}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3 style={{fontWeight: 'bolder', fontSize: '36px', textShadow: '1px 1px 2px black'}}>I've saved {Math.round(stone * 0.02)} kg of Plastic!</h3>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={money}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3 style={{fontWeight: 'bolder', fontSize: '36px', textShadow: '1px 1px 2px black'}}>I've saved {stone * 200} yen!</h3>
                </Carousel.Caption>
              </Carousel.Item>

            </Carousel>
            <Refill user={user} 
            handleUserChange={handleUserChange}
            handleStoneChange={handleStoneChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousels;
