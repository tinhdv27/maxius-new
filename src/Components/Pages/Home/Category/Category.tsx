import React from "react";
import "./Category.scss";
import { useTranslation } from "react-i18next";

interface Props {
  className: string;
}
const Category = ({ className }: Props) => {
  const { t } = useTranslation();

  return (
    <div className={`category ${className}`}>
      <div className="category-item">
        <span className="category-heading odd">{t("catetitle1")}</span>
        <p className="category-paragraph ">{t("catecontent1")}</p>
      </div>
      <div className="category-item">
        <span className="category-heading even">{t("catetitle2")}</span>
        <p className="category-paragraph">{t("catecontent2")}</p>
      </div>
      <div className="category-item ">
        <span className="category-heading odd1">{t("catetitle3")}</span>
        <p className="category-paragraph">{t("catecontent3")}</p>
      </div>
      <div className="category-item ">
        <span className="category-heading even1">{t("catetitle4")}</span>
        <p className="category-paragraph">{t("catecontent4")}</p>
      </div>
    </div>
  );
};

export default Category;
