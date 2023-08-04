import React from "react";
import "./Footer.scss";
import { useTranslation } from "react-i18next";

interface Props {
  className: string;
}

const Footer = ({ className }: Props) => {
  const { t } = useTranslation();
  return (
    <div className={`panel footer ${className}`}>
      <div className="contact">
        <div className="contact-item">
          <p className="contact-title">{t("footer1")}</p>
          <p className="contact-detail">{t("footer2")}</p>
        </div>
        <div className="contact-item">
          <p className="contact-title">{t("footer3")}</p>
          <p className="contact-detail">
            {t("footer4")} {">"}
          </p>
        </div>
        <div className="contact-item">
          <p className="contact-title">{t("footer5")}</p>
          <p className="contact-detail">
            {t("footer6")} {">"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
