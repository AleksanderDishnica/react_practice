import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import './carousel.css'
import Nav1 from './Nav1';
import img from './1.jpeg'
import Footer from './Footer'

export default function Carousel1() {
    return (
        <>
            <Nav1 />
            <Carousel>
                <Carousel.Item>
                    <Image src={img} fluid />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={img} fluid />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={img} fluid />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Footer />
        </>
    );
}