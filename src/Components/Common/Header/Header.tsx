import React, { useEffect, useState } from "react";
import Sidemenu from "../Sidemenu/Sidemenu";
import "./Header.scss";
import i18n from "i18next";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { transEN } from "../../lang/TranslationEN";
import { transKR } from "./../../lang/TranslationKR";
import { useLocation } from "react-router-dom";

const translationEN = transEN;
const translationKR = transKR;
const resources = {
  en: { translation: translationEN },
  kr: { translation: translationKR },
} as const;

i18next.use(initReactI18next).init({
  lng: "en",
  resources,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [language, setLanguage] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [logoColor, setLogoColor] = useState("");
  const [menuColor, setMenuColor] = useState("");
  const path = useLocation();
  const showDrawer = () => {
    setVisible(!visible);
    setIsOpen(!isOpen);
  };
  const changeLanguage = (value: any) => {
    value === "en" ? setLanguage(true) : setLanguage(false);
    i18n.changeLanguage(value);
  };

  useEffect(() => {
    switch (path.hash) {
      case "#firstPage":
        setLogoColor("");
        setMenuColor("");
        break;
      case "#secondPage":
        setLogoColor("logo-change");
        setMenuColor("menu-change");
        break;
      case "#thirdPage":
        setLogoColor("logo-change");
        setMenuColor("menu-change");
        break;
      case "#fourthPage":
        setLogoColor("");
        setMenuColor("");
        break;
      case "#fifthPage":
        setLogoColor("logo-change");
        setMenuColor("menu-change");
        break;
    }
  }, [path]);
  return (
    <div className="headermenu">
      <div className={`logo ${logoColor}`}>
        <span>MAXIUS</span>
      </div>
      <div className={`sidemenu ${menuColor}`}>
        <div
          className={`sidemenu-button ${isOpen ? "sidemenu-active" : ""}`}
          onClick={showDrawer}
        >
          <div className="sidemenu-line-1 sidemenu-line"></div>
          <div className="sidemenu-line-2 sidemenu-line"></div>
          <div className="sidemenu-line-3 sidemenu-line"></div>
        </div>
        <div className={`language ${isOpen ? "language-active" : ""}`}>
          <span
            className={language ? "active" : ""}
            onClick={() => changeLanguage("en")}
          >
            EN
          </span>
          <span
            className={language ? "" : "active"}
            onClick={() => changeLanguage("kr")}
          >
            KR
          </span>
        </div>
        <Sidemenu visible={visible} showDrawer={showDrawer} />
      </div>
    </div>
  );
};

export default Header;
