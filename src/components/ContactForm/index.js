import React, { useState } from "react";
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

const Contact = ({
  title,
  content,
  id,
  t,
  edit,
  asset,
  value,
  location,
  description,
}) => {
  const [defaultAsset, setDefaultAsset] = useState(asset);
  const [defaultValue, setDefaultValue] = useState(value);
  const [defaultLocation, setDefaultLocation] = useState(location);
  const [defaultDescription, setDefaultDescription] = useState(description);

  const { values, errors, handleChange, handleSubmit } = useForm(
    validate,
    edit,
    asset,
    setDefaultAsset,
    value,
    setDefaultValue,
    location,
    setDefaultLocation,
    description,
    setDefaultDescription
  );

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
          {title ? (
            <Col lg={12} md={11} sm={24}>
              <Block padding={true} title={title} content={content} />
            </Col>
          ) : null}

          <Col lg={12} md={12} sm={24} style={{ margin: "auto" }}>
            <S.FormGroup
              autoComplete="off"
              onSubmit={handleSubmit}
              style={{ margin: "auto" }}
            >
              <Col span={24}>
                <Input
                  type="text"
                  name="asset"
                  id="Asset"
                  placeholder="Asset Available"
                  text={values.asset || defaultAsset}
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
                  text={values.value || defaultValue}
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
                  text={values.location || defaultLocation}
                  onChange={handleChange}
                />
              </Col>
              <Col span={24}>
                <TextArea
                  placeholder="Detailed Description of Asset (size, capacity, any special requirements for item, additional items required for use)"
                  name="description"
                  id="Description"
                  onChange={handleChange}
                  text={values.description || defaultDescription}
                />
                <ValidationType type="description" />
              </Col>
              <S.ButtonContainer>
                <Button name="submit" type="submit">
                  {edit ? t("Update Asset") : t("List Asset")}
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
