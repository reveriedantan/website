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
                <H3>Qui suis-je</H3>
                <Text as="div">
                  <p><C1>Quelle vaste question.</C1> Comment pouvoir affirmer que l’on connaît chaque recoin de notre être ?</p>
                  <p>À <C1>60 printemps</C1>, je suis une femme curieuse, profondément attachée à la nature, et maman d’une adorable fille d’une vingtaine d’années.</p>
                  <p>Mon histoire avec les plantes remonte à mon arrière-grand-mère, qui avait déjà des connaissances sur leurs propriétés et les a transmises à ma mère. De cette histoire familiale est né, très tôt, mon <u>respect de la nature</u> et mon goût pour le jardinage et les <C1>plantes médicinales</C1>.</p>
                  <p>Mon propre parcours de santé m’a ensuite amenée à chercher un équilibre entre la <u>médecine conventionnelle</u> et les propriétés des <C1>plantes médicinales</C1>, dans une approche plus globale du bien-être. Un chemin qui m’a également conduite vers le travail sur soi, la relaxation, la nutrition et le mouvement.</p>
                  <p>C’est ainsi qu’à plus de <C1>58 ans</C1>, après une <u>formation littéraire</u> et un parcours en droit européen, économie et finances, j’ai décidé de me lancer dans l’étude des plantes. J’ai suivi une formation certifiée de deux ans en herboristerie à l’EFP, puis continué à me former au jardin médicinal et à la transformation raisonnée des plantes.</p>
                  <p>Je n’arrêterai jamais de me former, de m’informer et de m’ouvrir à de nouvelles dynamiques.</p>
                  <p>Parce que pour moi, l’herboristerie est avant tout une rencontre entre la <u>connaissance</u>, l’expérience et le <C1>vivant</C1>.</p>
                </Text>
              </Center>
            </Col>
          </Row>

          <Row className="align-items-center m-0">
            <Col lg="6" className="p-0">
              <Center>
                <H3>Mon projet</H3>
                <Text as="div">
                  <p><C1>Rêverie d’Antan</C1> propose un accompagnement personnalisé au bien-être à travers les plantes.</p>
                  <p>L’idée est de partir de vous, de vos besoins et de ce que vous recherchez. Lors de nos échanges, vous pourrez venir avec une problématique ou une envie particulière de mieux-être. Ensemble, nous chercherons des pistes adaptées, en nous appuyant notamment sur les propriétés et les usages traditionnels des plantes.</p>
                  <p>Pour moi, les moments de partage sont essentiels. Observer la nature, découvrir ce que la biodiversité nous offre et explorer les traditions ancestrales à la lumière des avancées scientifiques nourrit ma curiosité et mon envie de transmettre.</p>
                </Text>
                <H3>En pratique</H3>
                <Text as="div">
                  <p>Vous pouvez venir seul(e), à deux, avec des amis ou des membres de votre famille : tout est <u>modulable</u>.</p>

                  <p><C1>1. Prendre contact</C1><br />Par formulaire, e-mail ou WhatsApp. Nous convenons ensuite d’un rendez-vous, en visioconférence ou dans un lieu adapté, en fin d’après-midi ou le week-end.</p>

                  <p><C1>2. Premier échange</C1><br />Nous prenons le temps de comprendre ce que vous recherchez et de préciser ce que je peux vous proposer.</p>

                  <p><C1>3. Recherche & pistes</C1><br />À partir de cet échange, je recherche les pistes les plus adaptées à votre situation et vous les transmets pour vous laisser le temps d’y réfléchir.</p>

                  <p><C1>4. Personnalisation & suivi</C1><br />Nous échangeons à nouveau afin de construire un accompagnement qui vous corresponde. Après quelque temps, vous pouvez me recontacter pour partager votre expérience et poursuivre l’échange.</p>

                  <p>Pour le moment, cette démarche est proposée <u>gratuitement</u> et sans engagement. Les modalités et tarifs évolueront lorsque mon activité sera officiellement établie et seront communiqués en toute transparence.</p>
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