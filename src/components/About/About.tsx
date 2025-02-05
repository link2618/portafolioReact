import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import laptopImg from "../../assets/about.png";

import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

function About() {
    const { t } = useTranslation();

    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={7}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}
                    >
                        <h1
                            style={{ fontSize: "2.1em", paddingBottom: "20px" }}
                        >
                            {t("about.title1")} <strong className="purple">{t("about.title1.1")}</strong>
                        </h1>
                        <Aboutcard />
                    </Col>
                    <Col
                        md={5}
                        style={{ paddingTop: "120px", paddingBottom: "50px" }}
                        className="about-img"
                    >
                        <img
                            src={laptopImg}
                            alt="about"
                            className="img-fluid"
                        />
                    </Col>
                </Row>
                <h1 className="project-heading">
                    {t("about.title2")} <strong className="purple">{t("about.title2.1")} </strong>
                </h1>

                <Techstack />

                <h1 className="project-heading">
                    <strong className="purple">{t("about.title3")}</strong> {t("about.title3.1")}
                </h1>
                <Toolstack />
            </Container>
        </Container>
    );
}

export default About;
