import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export const scroll = () =>
  // eslint-disable-next-line no-undef
  new fullpage("#fullpage", {
    navigation: true,
    responsiveWidth: 700,
    anchors: [
      "firstPage",
      "secondPage",
      "thirdPage",
      "fourthPage",
      "fifthPage",
    ],
    parallax: true,
  });
