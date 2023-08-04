/* eslint-disable jsx-a11y/iframe-has-title */

import React from "react";
import { useTranslation } from "react-i18next";
import "./Contact.scss";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="contact-text">Contact us</div>
      <div className="contact-us">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7838.684254869503!2d106.70676642475235!3d10.785086936675276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1547181657956"
          className="contact-us-map"
        ></iframe>
        <div className="contact-us-info">
          <div className="contact-us-info-1">
            <span className="text-bold">{t("contact1")}</span>
            <br />
            <span>Tel 02. 851. 2662/ Fax 02. 851. 2662</span>
          </div>
          <div className="contact-us-info-2">
            <div className="label-1">
              <p>Company</p>
              <p>support@taejin.co.kr</p>
            </div>
            <div className="label-2">
              <p>Technical</p>
              <p>support@taejin.co.kr</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
