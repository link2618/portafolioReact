import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiOutlineTwitter,
    // AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import myImg from "../../assets/avatar.svg";

function Home2() {
    const { t } = useTranslation();

    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em", textTransform: "uppercase" }}>
                            {t("home2.title1")} <span className="purple"> {t("home2.titleHighlighted")} </span>{" "}
                            {t("home2.title2")}
                        </h1>
                        <p className="home-about-body">
                            {t("home2.paragraph1")}
                            <br />
                            <br />{t("home2.paragraph2")}
                            <i>
                                <b className="purple">
                                    {" "}
                                    {t("home2.paragraph3")}{" "}
                                </b>
                            </i>
                            {t("home2.paragraph4")}
                            <i>
                                <b className="purple">
                                    {" "}
                                    {t("home2.paragraph5")}{" "}
                                </b>
                            </i>
                            {t("home2.paragraph6")}
                            <i>
                                <b className="purple">
                                    {" "}
                                    {t("home2.paragraph7")}{" "}
                                </b>
                            </i>
                            {t("home2.paragraph8")}
                            <i>
                                <b className="purple">
                                    {" "}
                                    {t("home2.paragraph9")}{" "}
                                </b>
                            </i>
                            <br />
                            <br />
                            {t("home2.paragraph10")} &nbsp;
                            <i>
                                <b className="purple">
                                {t("home2.paragraph11")}{" "}
                                </b>{" "}
                                {t("home2.paragraph12")}{" "}
                                <b className="purple">{t("home2.paragraph13")}</b>
                            </i>
                            <br />
                            <br />
                            {t("home2.paragraph14")}
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img
                                src={myImg}
                                className="img-fluid"
                                alt="avatar"
                            />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1 style={{ textTransform: "uppercase" }}>{t("home2.findMe")}</h1>
                        <p>
                            {t("home2.desc1")}{" "}
                            <span className="purple">{t("home2.desc2")} </span>{t("home2.desc3")}
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/link2618"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://x.com/HugoCarvajalino"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiOutlineTwitter />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/hugo-carvajalino-solano-4420b1172/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            {/* <li className="social-icons">
                                <a
                                    href=""
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillInstagram />
                                </a>
                            </li> */}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Home2;
