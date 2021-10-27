import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import Refill from './Refill';
import { useState } from 'react';

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
                  src="https://picsum.photos/500/300?img=1"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>I've saved {stone} L water!</h3>
                  <p>we can put additional text here</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://picsum.photos/500/300?img=2"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>I've saved {stone} kg of CO2!</h3>
                  <p>we can put additional text here</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://picsum.photos/500/300?img=3"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>I've saved {stone} kg of Plastic!</h3>
                  <p>we can put additional text here</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://picsum.photos/500/300?img=4"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>I've saved {stone * 200} yen!</h3>
                  <p>we can put additional text here</p>
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
