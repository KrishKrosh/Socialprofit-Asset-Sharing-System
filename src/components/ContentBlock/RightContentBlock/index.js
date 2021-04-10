import React from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-reveal";
import loadable from "@loadable/component";
import { Link } from "react-router-dom";

import * as S from "./styles";

const SvgIcon = loadable(() => import("../../../common/SvgIcon"));
const Button = loadable(() => import("../../../common/Button"));

const RightBlock = ({ title, content, button, icon, t, id }) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <S.RightBlockContainer>
      <Row type="flex" justify="space-between" align="middle" id={id}>
        <Col lg={11} md={11} sm={11} xs={24}>
          <Slide left>
            <S.ContentWrapper>
              <h6>{t(title)}</h6>
              <S.Content>{t(content)}</S.Content>
              {button ? (
                <S.ButtonWrapper>
                  <Link to="/signup" style={{ width: "20vw" }}>
                    <Button width="300px">Sign Up</Button>
                  </Link>
                  <Button
                    color="#fff"
                    width="true"
                    onClick={() => scrollTo("about")}
                  >
                    Learn More
                  </Button>
                </S.ButtonWrapper>
              ) : (
                ""
              )}
            </S.ContentWrapper>
          </Slide>
        </Col>
        <Col lg={11} md={11} sm={12} xs={24}>
          <Slide right>
            <SvgIcon src={icon} className="about-block-image" />
          </Slide>
        </Col>
      </Row>
    </S.RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
