import Category from "./Category/Category";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import "./Home.scss";
import Slogan from "./Slogan/Slogan";
import Story from "./Story/Story";

import { useEffect, useState } from "react";
import { scroll } from "./../../Common/Fullpage/fullpage";
import { useLocation } from "react-router-dom";

const Home = () => {
  const path = useLocation();

  const [headerClass, setHeaderClass] = useState("");
  const [sloganClass, setSloganClass] = useState("");
  const [categoryClass, setCategoryClass] = useState("");
  const [storyClass, setStoryClass] = useState("");
  const [footerClass, setFooterClass] = useState("");

  useEffect(() => {
    scroll();
    console.log("ra");
  });

  const resetClass = () => {
    setHeaderClass("");
    setSloganClass("");
    setCategoryClass("");
    setStoryClass("");
    setFooterClass("");
  };

  useEffect(() => {
    resetClass();
    switch (path.hash) {
      case "#firstPage":
        setHeaderClass("header-animation");
        break;
      case "#secondPage":
        setSloganClass("slogan-animation");
        break;
      case "#thirdPage":
        setCategoryClass("category-animation");
        break;
      case "#fourthPage":
        setStoryClass("story-animation");
        break;
      case "#fifthPage":
        setFooterClass("footer-animation");
        break;
    }
  }, [path]);
  return (
    <div className="Home">
      <div className="page-home" id="fullpage">
        <div className="section">
          <Header className={headerClass} />
        </div>
        <div className="section">
          <Slogan className={sloganClass} />
        </div>
        <div className="section">
          <Category className={categoryClass} />
        </div>
        <div className="section">
          <Story className={storyClass} />
        </div>
        <div className="section">
          <Footer className={footerClass} />
        </div>
      </div>
      {/* <div className="piano">
        <i className="piano-header"></i>
        <i className="piano-slogan"></i>
        <i className="piano-category"></i>
        <i className="piano-story-page"></i>
        <i className="piano-footer"></i>
      </div> */}
    </div>
  );
};

export default Home;
