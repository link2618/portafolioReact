import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { SiInsomnia, SiDatagrip, SiPycharm, SiDocker, SiDbeaver } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaWindows } from "react-icons/fa";

import AboutTooltip from "./AboutTooltip";

function Toolstack() {
    const { t } = useTranslation();

    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <AboutTooltip title={t("about.toolWindows")} id={t("about.toolWindows")} >
                <Col xs={4} md={2} className="tech-icons">
                    <FaWindows />
                </Col>
            </AboutTooltip>
            <AboutTooltip title={t("about.toolVscode")} id={t("about.toolVscode")} >
                <Col xs={4} md={2} className="tech-icons">
                    <VscVscode />
                </Col>
            </AboutTooltip>
            <AboutTooltip title={t("about.toolInsomnia")} id={t("about.toolInsomnia")} >
                <Col xs={4} md={2} className="tech-icons">
                    <SiInsomnia />
                </Col>
            </AboutTooltip>
            <AboutTooltip title={t("about.toolDatagrip")} id={t("about.toolDatagrip")} >
                <Col xs={4} md={2} className="tech-icons">
                    <SiDatagrip />
                </Col>
            </AboutTooltip>
            <AboutTooltip title={t("about.toolPycharm")} id={t("about.toolPycharm")} >
                <Col xs={4} md={2} className="tech-icons">
                    <SiPycharm />
                </Col>
            </AboutTooltip>
            <AboutTooltip title={t("about.toolDocker")} id={t("about.toolDocker")} >
                <Col xs={4} md={2} className="tech-icons">
                    <SiDocker />
                </Col>
            </AboutTooltip>
            <AboutTooltip title={t("about.toolDbeaver")} id={t("about.toolDbeaver")} >
                <Col xs={4} md={2} className="tech-icons">
                    <SiDbeaver />
                </Col>
            </AboutTooltip>
        </Row>
    );
}

export default Toolstack;
