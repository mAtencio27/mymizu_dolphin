import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import Refill from './Refill';
import { useSelector } from 'react-redux';

function Carousels({user, handleUserChange}) {
  const refill_amount = useSelector(state => state.milestone.refill_amount)
  const CO2 = useSelector(state => state.milestone.CO2);
  const Plastic = useSelector(state => state.milestone.Plastic);
  const Money = useSelector(state => state.milestone.Money);
  

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
                  <h3>I've saved {refill_amount} L water!</h3>
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
                  <h3>I've saved {CO2} kg of CO2!</h3>
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
                  <h3>I've saved {Plastic} kg of Plastic!</h3>
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
                  <h3>I've saved {Money} yen!</h3>
                  <p>we can put additional text here</p>
                </Carousel.Caption>
              </Carousel.Item>

            </Carousel>
            <Refill user={user} handleUserChange={handleUserChange}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousels;
