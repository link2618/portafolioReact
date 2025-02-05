import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import homeLogo from "../../assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
    const { t } = useTranslation();

    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Particle />
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1
                                style={{ paddingBottom: 15 }}
                                className="heading"
                            >
                                {t("greeting")}{" "}
                                <span
                                    className="wave"
                                    role="img"
                                    aria-labelledby="wave"
                                >
                                    {t("iconGreeting")}
                                </span>
                            </h1>

                            <h1 className="heading-name">
                                {t("subject")}
                                <strong className="main-name">
                                    {" "}
                                    {t("name")}
                                </strong>
                            </h1>

                            <div style={{ padding: 50, textAlign: "left" }}>
                                <Type />
                            </div>
                        </Col>

                        <Col md={5} style={{ paddingBottom: 20 }}>
                            <img
                                src={homeLogo}
                                alt="home pic"
                                className="img-fluid"
                                style={{ maxHeight: "450px" }}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Home2 />
        </section>
    );
}

export default Home;
