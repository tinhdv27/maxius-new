import React from "react";

import { useTranslation } from "react-i18next";
import "./Header.scss";
import { useEffect } from "react";
import { useRef } from "react";

interface Props {
  className: string;
}
const Header = ({ className }: Props) => {
  const { t } = useTranslation();
  let headerRef = useRef(null);
  useEffect(() => {
    console.log(headerRef.current);
  }, [headerRef]);
  return (
    <div className={`panel header ${className}`}>
      <div className="header-text">
        <p className="header-heading">MAX I & US</p>
        <p className="header-paragraph">{t("headertitle1")}</p>
        <p className="header-paragraph--two">{t("headercontent1")}</p>
      </div>
    </div>
  );
};

export default Header;
