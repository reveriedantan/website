import Slider from "react-slick";
import { Banner, Map } from "../components/";
import { H3, Text, Center, C1 } from "../components/Titles";
import { Overlay } from "../components/Images";
import { Col, Row } from "reactstrap";
import { Helmet } from "react-helmet";

// eslint-disable-next-line
export default () => {

  return (
        <span>
        <Helmet>
            <title>Rêverie d'Antan</title>
        </Helmet>
        <Banner/>
        <section className="section section-lg section-shaped pg-250">
        <div className="h-100" id="caroussel">
          <Row className="align-items-center m-0">
            <Col lg="6" className="p-0" style={{display:"flex"}}>
            <Overlay>
              <Slider
                infinite={true}
                slidesToShow={1}
                dots={false}
                speed={3500}
                autoplaySpeed={1500}
                fade={true}
                autoplay={true}
                arrows={false}
              >
              <img src="/static/img/home0.jpg" alt=""/>
              </Slider>
            </Overlay>
            </Col>
            <Col lg="6" className="p-0">
              <Center>
                <H3></H3>
                <Text>
                </Text>
              </Center>
            </Col>
          </Row>

          <Row className="align-items-center m-0">
            <Col lg="6" className="p-0">
              <Center>
                <H3></H3>
                <Text>
                </Text>
              </Center>
            </Col>
            <Col lg="6" className="p-0" style={{display:"flex"}}>
            <Overlay>
              <Slider
                infinite={true}
                slidesToShow={1}
                dots={false}
                speed={3500}
                autoplaySpeed={1500}
                fade={true}
                autoplay={true}
                arrows={false}
              >
              <img src="/static/img/home1.jpg" alt=""/>
              <img src="/static/img/home2.jpg" alt=""/>
              <img src="/static/img/home3.jpg" alt=""/>
              <img src="/static/img/home4.jpg" alt=""/>
              <img src="/static/img/home5.jpg" alt=""/>
              <img src="/static/img/home6.jpg" alt=""/>
              <img src="/static/img/home7.jpg" alt=""/>
              <img src="/static/img/home8.jpg" alt=""/>
              <img src="/static/img/home9.jpg" alt=""/>
              </Slider>
            </Overlay>
            </Col>
          </Row>
        </div>
        <Map />
        </section>
        </span>
    );
};