import React from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Fade } from "react-reveal";
import loadable from "@loadable/component";
import * as S from "./styles";
import { Link } from "react-router-dom";

const Button = loadable(() => import("../../common/Button"));

const AssetBlock = ({
  title,
  content,
  button,
  button2,
  t,
  id,
  owner,
  value,
  location,
  phone,
  email,
}) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <S.MiddleBlock>
      <Row type="flex" justify="center" align="middle" id={id}>
        <Fade bottom>
          <S.ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <p>{owner}</p>
              <h6>{t(title)}</h6>
              <S.Content>
                {content} <br />
                <br />
                <br />
                <strong>Estimated Asset Value:</strong> ${value} <br />
                <strong>Location:</strong> {location}
                <br />
                <strong>Email:</strong> <a href={"mailto:" + email}>{email}</a>
                <br />
                <strong>Phone:</strong> <a href={"tel:" + phone}>{phone}</a>
                <br />
                <br />
                <br />
                <p>Please contact the owner if you wish to use this asset.</p>
              </S.Content>
              {button ? (
                <>
                  <Button
                    style={{ margin: "5px" }}
                    name="edit"
                    onClick={button2}
                  >
                    Edit Listing
                  </Button>

                  <Button
                    style={{ margin: "5px" }}
                    name="delete"
                    onClick={button}
                  >
                    Delete Listing
                  </Button>
                </>
              ) : (
                ""
              )}
            </Col>
          </S.ContentWrapper>
        </Fade>
      </Row>
    </S.MiddleBlock>
  );
};

export default withTranslation()(AssetBlock);
