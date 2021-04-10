import { useState, useEffect } from "react";
import { notification } from "antd";
import axios from "axios";
import { db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";

const useForm = (validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [shouldSubmit, setShouldSubmit] = useState(false);
  const { currentUser } = useAuth();
  const user = db.collection("users").doc(currentUser.email);

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Success",
      description: "Your asset has been listed",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    var location = "";
    var orgName = "";
    if (values.asset && values.value && values.description) {
      user
        .get()
        .then((doc) => {
          if (values.location !== undefined) {
            location = values.location;
          } else {
            location = doc.data().address;
          }
          orgName = doc.data().orgName;
        })
        .then(() => {
          user.collection("assets").doc(values.asset).set({
            name: values.asset,
            value: values.value,
            location: location,
            description: values.description,
            owner: orgName,
          });
        })
        .then(() => {
          setShouldSubmit(true);
        });
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      setValues("");
      openNotificationWithIcon("success");
    }
  }, [errors, shouldSubmit]);

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
