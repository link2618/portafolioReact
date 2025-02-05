import { FC, ReactElement } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

interface AboutTooltipProps {
    id: string;
    children: ReactElement;
    title: string;
}

const AboutTooltip: FC<AboutTooltipProps> = ({ id, children, title }) => {
    return (
        <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
            {children}
        </OverlayTrigger>
    );
}

export default AboutTooltip;
