import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router";
import { CgFileDocument } from "react-icons/cg";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { MdOutlineLanguage } from "react-icons/md";

import logo from "../Assets/logo.svg";
import { LANGUAGES } from '../constants/index';

function NavBar() {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    const { i18n, t } = useTranslation();

    const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const lang_code = e.target.value;
        i18n.changeLanguage(lang_code);
    };

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            className={navColour ? "sticky" : "navbar"}
        >
            <Container>
                <Navbar.Brand href="/" className="d-flex">
                    <img src={logo} className="img-fluid logo" alt="brand" />
                </Navbar.Brand>

                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(!expand);
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/"
                                onClick={() => updateExpanded(false)}
                            >
                                <AiOutlineHome
                                    style={{ marginBottom: "2px" }}
                                />{" "}
                                {t("menu.home")}
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/about"
                                onClick={() => updateExpanded(false)}
                            >
                                <AiOutlineUser
                                    style={{ marginBottom: "2px" }}
                                />{" "}
                                {t("menu.about")}
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/resume"
                                onClick={() => updateExpanded(false)}
                            >
                                <CgFileDocument
                                    style={{ marginBottom: "2px" }}
                                />{" "}
                                {t("menu.resume")}
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <div className="nav-link lang-selector">
                                <MdOutlineLanguage style={{ marginBottom: "2px" }} />
                                <select
                                defaultValue={i18n.language}
                                onChange={onChangeLang}
                                className="lang-dropdown"
                                >
                                {LANGUAGES.map(({ code, label }) => (
                                    <option key={code} value={code}>
                                    {label}
                                    </option>
                                ))}
                                </select>
                            </div>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
