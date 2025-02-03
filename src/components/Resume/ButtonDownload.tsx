import { FC } from "react";
import { Row } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { useTranslation } from "react-i18next";

import Button from "react-bootstrap/Button";

interface ButtonDownloadProps {
    pdf: string;
}

const ButtonDownload: FC<ButtonDownloadProps> = ({ pdf }) => {
    const { t } = useTranslation();

    return (
        <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
                variant="primary"
                href={pdf}
                download="Hugo_Carvajalino_CV.pdf"
                as="a"
                target="_blank"
                style={{ maxWidth: "250px" }}
            >
                <AiOutlineDownload />
                &nbsp;{t("resume.download")}
            </Button>
        </Row>
    );
};

export default ButtonDownload;
