import React from "react";
import loadable from "@loadable/component";
import ContactContent from "../../content/ContactContent.json";

const ContactFrom = loadable(() => import("../../components/ContactForm"));
const Container = loadable(() => import("../../common/Container"));

const AddAsset = () => {
  return (
    <Container>
      <ContactFrom
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default AddAsset;
