import React from "react";
import loadable from "@loadable/component";

import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import { useAuth } from "../../contexts/AuthContext";
import AllAssets from "../LoggedIn/allAssets";

const ContentBlock = loadable(() => import("../../components/ContentBlock"));
const MiddleBlock = loadable(() => import("../../components/MiddleBlock"));
const Container = loadable(() => import("../../common/Container"));
const ScrollToTop = loadable(() => import("../../common/ScrollToTop"));

const Home = () => {
  const { currentUser } = useAuth();

  if (currentUser) {
    return <AllAssets />;
  } else {
    return (
      <Container>
        <ScrollToTop />
        <ContentBlock
          type="right"
          first="true"
          title={IntroContent.title}
          content={IntroContent.text}
          button={IntroContent.button}
          icon="coworking.svg"
          id="intro"
        />
        <MiddleBlock
          title={MiddleBlockContent.title}
          content={MiddleBlockContent.text}
          button={MiddleBlockContent.button}
          id="about"
        />
        <ContentBlock
          type="left"
          title={AboutContent.title}
          content={AboutContent.text}
          section={AboutContent.section}
          icon="graphic.svg"
        />
        <ContentBlock
          type="right"
          title={MissionContent.title}
          content={MissionContent.text}
          icon="product-launch.svg"
          id="mission"
        />

        <ContentBlock
          type="left"
          title={ProductContent.title}
          content={ProductContent.text}
          icon="waving.svg"
          id="product"
        />
      </Container>
    );
  }
};

export default Home;
