import React from "react";
import { withTranslation } from "react-i18next";

import * as S from "./styles";

const Input = ({ id, name, placeholder, onChange, t }) => (
  <S.Container>
    <label htmlFor={name}>{id}</label>
    <S.Input
      spellcheck="false"
      placeholder={t(placeholder)}
      name={name}
      id={name}
      onChange={onChange}
    />
  </S.Container>
);

export default withTranslation()(Input);
