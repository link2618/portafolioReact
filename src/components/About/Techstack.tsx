import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiSass,
} from "react-icons/di";
import {
    SiNestjs,
    SiFirebase,
    SiPostgresql,
    SiServerless,
    SiAwslambda,
    SiDocker,
    SiTailwindcss,
} from "react-icons/si";
import { TbBrandGolang, TbBrandNextjs } from "react-icons/tb";
import { FaAws } from "react-icons/fa";

import AboutTooltip from "./AboutTooltip";

function Techstack() {
    const { t } = useTranslation();

    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <AboutTooltip title={t("about.javascript")} id={t("about.javascript")} >
                <Col xs={4} md={2} className="tech-icons">
                    <DiJavascript1 />
                </Col>
            </AboutTooltip>
            <AboutTooltip title={t("about.nodejs")} id={t("about.nodejs")} >
                <Col xs={4} md={2} className="tech-icons">
                    <DiNodejs />
                </Col>
            </AboutTooltip>
            <AboutTooltip title={t("about.nestjs")} id={t("about.nestjs")} >
                <Col xs={4} md={2} className="tech-icons">
                    <SiNestjs />
                </Col>
            </AboutTooltip>
            <AboutTooltip title={t("about.react")} id={t("about.react")} >
                <Col xs={4} md={2} className="tech-icons">
                    <DiReact />
                </Col>
            </AboutTooltip>
            <AboutTooltip title={t("about.nextjs")} id={t("about.nextjs")} >
                <Col xs={4} md={2} className="tech-icons">
                    <TbBrandNextjs />
                </Col>
            </AboutTooltip>
            <AboutTooltip title={t("about.golang")} id={t("about.golang")} >
                <Col xs={4} md={2} className="tech-icons">
                    <TbBrandGolang />
                </Col>
            </AboutTooltip>
            <AboutTooltip title={t("about.mongodb")} id={t("about.mongodb")} >
                <Col xs={4} md={2} className="tech-icons">
                    <DiMongodb />
                </Col>
            </AboutTooltip>
            <AboutTooltip title={t("about.postgresql")} id={t("about.postgresql")} >
                <Col xs={4} md={2} className="tech-icons">
                    <SiPostgresql />
                </Col>
            </AboutTooltip>
            <AboutTooltip title={t("about.firebase")} id={t("about.firebase")} >
                <Col xs={4} md={2} className="tech-icons">
                    <SiFirebase />
                </Col>
            </AboutTooltip>
            <AboutTooltip title={t("about.git")} id={t("about.git")} >
                <Col xs={4} md={2} className="tech-icons">
                    <DiGit />
                </Col>
            </AboutTooltip>
            <AboutTooltip title={t("about.python")} id={t("about.python")} >
                <Col xs={4} md={2} className="tech-icons">
                    <DiPython />
                </Col>
            </AboutTooltip>
            <AboutTooltip title={t("about.aws")} id={t("about.aws")} >
                <Col xs={4} md={2} className="tech-icons">
                    <FaAws />
                </Col>
            </AboutTooltip>
            <AboutTooltip title={t("about.serverless")} id={t("about.serverless")} >
                <Col xs={4} md={2} className="tech-icons">
                    <SiServerless />
                </Col>
            </AboutTooltip>
            <AboutTooltip title={t("about.lambda")} id={t("about.lambda")} >
                <Col xs={4} md={2} className="tech-icons">
                    <SiAwslambda />
                </Col>
            </AboutTooltip>
            <AboutTooltip title={t("about.docker")} id={t("about.docker")} >
                <Col xs={4} md={2} className="tech-icons">
                    <SiDocker />
                </Col>
            </AboutTooltip>
            <AboutTooltip title={t("about.sass")} id={t("about.sass")} >
                <Col xs={4} md={2} className="tech-icons">
                    <DiSass />
                </Col>
            </AboutTooltip>
            <AboutTooltip title={t("about.tailwind")} id={t("about.tailwind")} >
                <Col xs={4} md={2} className="tech-icons">
                    <SiTailwindcss />
                </Col>
            </AboutTooltip>
        </Row>
    );
}

export default Techstack;
