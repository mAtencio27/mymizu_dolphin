import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

function Carousels() {
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
                  {/* name should be changed depends on user */}
                  <h3>I've saved water!</h3>
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
                {/* name should be changed depends on user */}
                  <h3>I've saved of CO2!</h3>
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
                {/* name should be changed depends on user */}
                  <h3>I've saved Plastic!</h3>
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
                {/* name should be changed depends on user */}
                  <h3>I've saved Money!</h3>
                  <p>we can put additional text here</p>
                </Carousel.Caption>
              </Carousel.Item>

            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousels;
