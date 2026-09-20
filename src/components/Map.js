import React from 'react';
import { Center, H3, Text } from './Titles.js';
import {
  Button,
  Card,
  CardText,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import L from 'leaflet';
import SETTINGS from '../settings';
import 'leaflet/dist/leaflet.css'
import { Overlay } from './Images.js';
import Slider from 'react-slick';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

// eslint-disable-next-line
export default () => {
  return (
    <section className="section section-lg section-shaped pg-250" id="#map">
      <div className="h-100 w-100">
        <Row className="align-items-center m-0">
          <Col lg="6" className='p-0'>
            <Row className="align-items-center m-0">
            <Center>
              <H3 className="text-center"><FontAwesomeIcon icon={['fas', 'map-marker-alt']} /> Où nous contacter </H3>
              <Text>
                  <ul style={{listStyleType: "none"}}>
                      {SETTINGS.location.entreprise ?
                          <li>
                              <FontAwesomeIcon icon={['fas', 'address-book']}/>
                              {SETTINGS.location.entreprise.url
                                  ? <a href={SETTINGS.location.entreprise.url}> {SETTINGS.location.entreprise.name}</a>
                                  : SETTINGS.location.entreprise}
                          </li>
                          : null
                      }
                      <li>
                          <FontAwesomeIcon icon={['fas', 'envelope']}/>
                          <a href={`mailto:${SETTINGS.location.email}`}>
                              {` ${SETTINGS.location.email}`}
                          </a>
                      </li>
                  </ul>
              </Text>
            </Center>
            </Row>
          </Col>
          <Col lg="6" className='p-0'>
            <div className="d-flex align-items-center justify-content-center h-100 px-4 py-5">
              <Form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="w-100 bg-white rounded shadow p-4"
                style={{ maxWidth: 520 }}
              >
                <input type="hidden" name="access_key" value="12b19cb6-15ea-416d-a144-2cb19a2d2f86" />
                <input type="hidden" name="subject" value="Nouveau message depuis le site Rêverie d'Antan" />

                <FormGroup>
                  <Label for="contact-nom">Prénom</Label>
                  <Input
                    type="text"
                    name="prenom"
                    id="contact-prenom"
                    placeholder="John"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="contact-prenom">Nom</Label>
                  <Input
                    type="text"
                    name="nom"
                    id="contact-nom"
                    placeholder="Doe"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="contact-prenom">E-mail</Label>
                  <Input
                    type="email"
                    name="email"
                    id="contact-email"
                    placeholder="john.doe@exemple.com"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="contact-message">Message</Label>
                  <Input
                    type="textarea"
                    name="message"
                    id="contact-message"
                    placeholder="Votre message"
                    rows="5"
                    required
                  />
                </FormGroup>

                <Button color="primary" type="submit" className="btn-block mt-3">
                  Envoyer
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}