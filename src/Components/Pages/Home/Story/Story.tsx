import "./Story.scss";
import { useTranslation } from "react-i18next";

interface Props {
  className: string;
}

const Story = ({ className }: Props) => {
  const { t } = useTranslation();
  return (
    <div className={`panel story-page ${className}`}>
      <p className="story-text">{t("story")}</p>
      <div className="story-list">
        <div className="story-box">
          <p className="story-heading">{t("storytitle1")}</p>
          <div className="story">
            <div className="story-item">
              <p className="story-title">{t("storytitle11")}</p>
              <p className="story-detail">{t("storycontent11")}</p>
            </div>
            <div className="story-item">
              <p className="story-title">{t("storytitle12")}</p>
              <p className="story-detail">{t("storycontent12")}</p>
            </div>
            <div className="story-item">
              <p className="story-title">{t("storytitle13")}</p>
              <p className="story-detail">{t("storycontent13")}</p>
            </div>
          </div>
        </div>
        <div className="story-box">
          <p className="story-heading">{t("storytitle2")}</p>
          <div className="story">
            <div className="story-item">
              <p className="story-title">{t("storytitle21")}</p>
              <p className="story-detail">{t("storycontent21")}</p>
            </div>
            <div className="story-item">
              <p className="story-title">{t("storytitle22")}</p>
              <p className="story-detail">{t("storycontent22")}</p>
            </div>
            <div className="story-item">
              <p className="story-title">{t("storytitle23")}</p>
              <p className="story-detail">{t("storycontent23")}</p>
            </div>
          </div>
        </div>
        <div className="story-box">
          <p className="story-heading">{t("storytitle3")}</p>
          <div className="story">
            <div className="story-item">
              <p className="story-title">{t("storytitle31")}</p>
              <p className="story-detail">{t("storycontent31")}</p>
            </div>
            <div className="story-item">
              <p className="story-title">{t("storytitle32")}</p>
              <p className="story-detail">{t("storycontent32")}</p>
            </div>
            <div className="story-item">
              <p className="story-title">{t("storytitle33")}</p>
              <p className="story-detail">{t("storycontent33")}</p>
            </div>
            <div className="story-item">
              <p className="story-title">{t("storytitle34")}</p>
              <p className="story-detail">{t("storycontent34")}</p>
            </div>
            <div className="story-item">
              <p className="story-title">{t("storytitle35")}</p>
              <p className="story-detail">{t("storycontent35")}</p>
            </div>
            <div className="story-item">
              <p className="story-title">{t("storytitle36")}</p>
              <p className="story-detail">{t("storycontent36")}</p>
            </div>
          </div>
        </div>
        <div className="story-box">
          <p className="story-heading">{t("storytitle4")}</p>
          <div className="story">
            <div className="story-item">
              <p className="story-title">{t("storytitle41")}</p>
              <p className="story-detail">{t("storycontent41")}</p>
            </div>
            <div className="story-item">
              <p className="story-title">{t("storytitle42")}</p>
              <p className="story-detail">{t("storycontent42")}</p>
            </div>
            <div className="story-item">
              <p className="story-title">{t("storytitle43")}</p>
              <p className="story-detail">{t("storycontent43")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
