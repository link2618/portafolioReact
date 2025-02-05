import Card from "react-bootstrap/Card";
import { useTranslation } from "react-i18next";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
    const { t } = useTranslation();

    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        {t("about.aboutCard1")}{" "}
                        <span className="purple">{t("about.aboutCard2")} </span>
                        {t("about.aboutCard3")}{" "}
                        <span className="purple"> {t("about.aboutCard4")}</span>
                        <br />
                        {t("about.aboutCard5")}
                        <br />
                        <br />
                        {t("about.aboutCard6")}
                    </p>
                    <ul>
                        <li className="about-activity">
                            {t("about.aboutCardActivity1")}
                        </li>
                        <li className="about-activity">
                            {t("about.aboutCardActivity2")}
                        </li>
                        <li className="about-activity">
                            {t("about.aboutCardActivity3")}
                        </li>
                        <li className="about-activity">
                            {t("about.aboutCardActivity4")}
                        </li>
                    </ul>

                    <p style={{ color: "rgb(155 126 172)" }}>
                        "{t("about.aboutCardTagline")}"{" "}
                    </p>
                    <footer className="blockquote-footer">{t("about.aboutCardTaglineCredit")}</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
