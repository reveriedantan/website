import React from "react";
import {
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";
import SETTINGS from '../settings';
// eslint-disable-next-line
export default () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-md-between">
          <Col md="6">
            {SETTINGS.title} © {new Date().getFullYear()}
          </Col>
          <Col md="6">
            {SETTINGS.title} ne sont pas des soins médicaux.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
