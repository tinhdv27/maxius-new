import React from "react";
import { useTranslation } from "react-i18next";
import "./Slogan.scss";

interface Props {
  className: string;
}
const Slogan = ({ className }: Props) => {
  const { t } = useTranslation();

  return (
    <div className={`panel slogan ${className}`}>
      <p className="slogan-text">
        1. <span className="slogan-highlight">{t("slogan1")}</span>{" "}
        {t("slogan2")} <br /> {t("slogan3")}
        <span className="slogan-highlight">{t("slogan4")}</span> {t("slogan5")}
        <br />
        {t("slogan6")} <span className="slogan-highlight">{t("slogan7")}</span>
        {t("slogan8")}
        <br /> {t("slogan9")}
        <span className="slogan-highlight">{t("slogan10")}</span>
        {t("slogan11")}
      </p>
    </div>
  );
};

export default Slogan;
