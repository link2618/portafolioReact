import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {
    AiFillGithub,
    AiOutlineTwitter,
    // AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
    const { t } = useTranslation();

    const date = new Date();
    const year = date.getFullYear();
    
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copywright">
                    <h3>{t("footer.credits")}</h3>
                </Col>
                <Col md="4" className="footer-copywright">
                    <h3>Copyright © {year} HC</h3>
                </Col>
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a
                                href="https://github.com/link2618"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://x.com/HugoCarvajalino"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiOutlineTwitter />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/hugo-carvajalino-solano-4420b1172/"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
