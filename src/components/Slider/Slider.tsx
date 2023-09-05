import Carousel from 'react-bootstrap/Carousel'
import bandage from 'assets/bandage.jpg'
import IMG_1 from 'assets/IMG_1.jpg'
import IMG_2 from 'assets/IMG_2.jpg'
import IMG_3 from 'assets/IMG_3.jpg'

import './Slider.scss'

type Props = {}

const Slider = (props: Props) => {
    return (
        <>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-img"
                        src={bandage}
                        alt="First slide"
                    />
                    {/* <Carousel.Caption>
                        <h5>Пов'язки</h5>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-img"
                        src={IMG_1}
                        alt="Second slide"
                    />
                    {/* <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-img"
                        src={IMG_2}
                        alt="Third slide"
                    />
                    {/* <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-img"
                        src={IMG_3}
                        alt="Third slide"
                    />
                    {/* <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Slider
