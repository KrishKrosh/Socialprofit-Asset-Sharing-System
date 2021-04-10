import React from "react";
import { Row, Col } from "antd";
import Zoom from "react-reveal/Zoom";
import loadable from "@loadable/component";
import { withTranslation } from "react-i18next";

import useForm from "./useForm";
import validate from "./validationRules";
import * as S from "./styles";

const Block = loadable(() => import("../Block"));
const Input = loadable(() => import("../../common/Input"));
const Button = loadable(() => import("../../common/Button"));
const TextArea = loadable(() => import("../../common/TextArea"));

const Contact = ({ title, content, id, t }) => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate);

  const ValidationType = ({ type }) => {
    const ErrorMessage = errors[type];
    return errors[type] ? (
      <Zoom cascade>
        <S.Span>{ErrorMessage}</S.Span>
      </Zoom>
    ) : (
      <S.Span />
    );
  };

  return (
    <S.ContactContainer id={id}>
      <S.Contact>
        <Row type="flex" justify="space-between" align="middle">
          <Col lg={12} md={11} sm={24}>
            <Block padding={true} title={title} content={content} />
          </Col>
          <Col lg={12} md={12} sm={24}>
            <S.FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Col span={24}>
                <Input
                  type="text"
                  name="asset"
                  id="Asset"
                  placeholder="Asset Available"
                  value={values.asset || ""}
                  onChange={handleChange}
                />
                <ValidationType type="asset" />
              </Col>
              <Col span={24}>
                <Input
                  type="number"
                  name="value"
                  id="Value"
                  placeholder="Estimated Asset Value"
                  value={values.value || ""}
                  onChange={handleChange}
                />
                <ValidationType type="value" />
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  name="location"
                  id="Location"
                  placeholder="Asset Location (if different than organization's address)"
                  value={values.location || ""}
                  onChange={handleChange}
                />
              </Col>
              <Col span={24}>
                <TextArea
                  placeholder="Detailed Description of Asset (size, capacity, any special requirements for item, additional items required for use)"
                  value={values.description || ""}
                  name="description"
                  id="Description"
                  onChange={handleChange}
                />
                <ValidationType type="description" />
              </Col>
              <S.ButtonContainer>
                <Button name="submit" type="submit">
                  {t("List Asset")}
                </Button>
              </S.ButtonContainer>
            </S.FormGroup>
          </Col>
        </Row>
      </S.Contact>
    </S.ContactContainer>
  );
};

export default withTranslation()(Contact);
