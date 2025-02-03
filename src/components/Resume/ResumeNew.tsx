// import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";

import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../assets/../assets/Hugo_carvajalino.pdf";

function ResumeNew() {
    // const [pdfDimensions, setPdfDimensions] = useState({
    //     width: 793,
    //     height: 1122,
    // });

    // const updateSize = () => {
    //     const screenWidth = window.innerWidth;
    //     setPdfDimensions({
    //         width: screenWidth > 992 ? 793 : screenWidth - 30,
    //         height: screenWidth > 992 ? 1122 : (screenWidth - 30) * 1.414,
    //     });
    // };

    // useEffect(() => {
    //     window.addEventListener("resize", updateSize);
    //     return () => window.removeEventListener("resize", updateSize);
    // }, []);

    return (
        <div>
            <Container fluid className="resume-section">
                <Particle />
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button
                        variant="primary"
                        href={pdf}
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>

                <Row className="resume">
                    <div className="pdf-wrapper">
                        <iframe
                            src={`${pdf}#view=FitH`}
                            className="responsive-pdf"
                            title="PDF Viewer"
                        />
                    </div>
                    {/* <iframe
                        src={pdf}
                        style={{
                            width: `${pdfDimensions.width}px`,
                            height: `${pdfDimensions.height}px`,
                        }}
                        className="responsive-pdf"
                        title="PDF Viewer"
                    /> */}
                </Row>

                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button
                        variant="primary"
                        href={pdf}
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>
            </Container>
        </div>
    );
}

export default ResumeNew;
