import { useTranslation } from "react-i18next";
import Typewriter from "typewriter-effect";

function Type() {
    const { t } = useTranslation();

    const roles = t("roles", { returnObjects: true });
    const rolesArray = Array.isArray(roles) ? roles : [];

    return (
        <Typewriter
            options={{
                strings: rolesArray,
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
