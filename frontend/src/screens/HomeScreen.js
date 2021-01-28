import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import pic2 from "./images/pic4.jpg";
import pic3 from "./images/pic3.jpg";
import pic4 from "./images/pic2.jpg";

const HomeScreen = () => {
  return (
    <div>
      <div className="img">
        <Container>
          <h6></h6>
          <h1 className="text-center py-1">Explore. Share. Get inspired</h1>
          <div className="text-center py-4">
            <LinkContainer to="/register">
              <Button variant="info" className="btn-m">
                Join now
              </Button>
            </LinkContainer>
          </div>
        </Container>
      </div>
      <div className="bg">
        <Container className="image">
          <br />
          <br />
          <div className="pt-3" id="about">
            About Travel Diaries
          </div>
          <Row>
            <Col sm={11} md={7} className="pt-3">
              <img
                src={pic2}
                alt="pic2"
                className="img-fluid animated bounce infinite"
              />
            </Col>

            <Col sm={12} md={4} lg={5} className="pt-3">
              <h2>Share memories</h2>
              <p className="xyz">
                Share your experiences of adventurous trips and let people know
                more amazing and thrilling insights of those regions.
                <br />
                <br />
                <Link to="/new">
                  Add experience
                  <span> </span>
                  <i class="fas fa-angle-right"></i>
                </Link>
              </p>
            </Col>
          </Row>
          <Row className="row flex-column-reverse flex-md-row">
            <Col sm={12} md={4} lg={5} className="pt-5">
              <h2>Look through different locations</h2>
              <p className="xyz">
                Read what others have shared and get to know more about the
                location, so that next time whenever you plan to visit somewhere
                you can compare the feedbacks easily.
                <br />
                <br />
                <Link to="/new">
                  Read experience
                  <span> </span>
                  <i class="fas fa-angle-right"></i>
                </Link>
              </p>
            </Col>
            <Col sm={11} md={7} className="pt-5">
              <img src={pic3} alt="pic3" className="img-fluid" />
            </Col>
          </Row>
          <Row>
            <Col sm={11} md={7} className="pt-5">
              <img src={pic4} alt="pic2" className="img-fluid" />
            </Col>

            <Col sm={12} md={4} lg={5} className="pt-5">
              <h2>Ask your doubts</h2>
              <p className="xyz">
                Have doubts? Comment down.
                <br />
                <br />
                <Link to="/new">
                  Go ahead
                  <span> </span>
                  <i class="fas fa-angle-right"></i>
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
        <div className="text-right py-3 back">
          <ScrollUpButton />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
