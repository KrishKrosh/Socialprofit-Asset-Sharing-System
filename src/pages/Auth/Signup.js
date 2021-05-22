import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container, Col } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../firebase";
import { Link, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Signup() {
  const emailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const nonprofitNumberRef = useRef();
  const orgNameRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const postalCodeRef = useRef();
  const contNameRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [accept, setAccept] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    } else if (accept === false) {
      return setError("Please accept our Terms and Conditions");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Error Signing Up");
    }

    await db
      .collection("users")
      .doc(emailRef.current.value)
      .set({
        orgName: orgNameRef.current.value,
        email: emailRef.current.value,
        number: nonprofitNumberRef.current.value,
        address: addressRef.current.value,
        city: cityRef.current.value,
        postalCode: postalCodeRef.current.value,
        contName: contNameRef.current.value,
        phone: phoneRef.current.value,
      })
      .then((docRef) => {
        console.log("Document written with ID: ");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        setError(error);
      });
    history.push("/");
    setLoading(false);
  }

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="w-100"
        style={{ maxWidth: "700px", marginTop: "30px", marginBottom: "30px" }}
      >
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="orgName">
                <Form.Label>Organization Name</Form.Label>
                <Form.Control type="name" ref={orgNameRef} required />
              </Form.Group>
              <Form.Group id="nonprofitNumber">
                <Form.Label>Charitable Organization Number</Form.Label>
                <Form.Control ref={nonprofitNumberRef} required />
              </Form.Group>
              <Form.Group id="address">
                <Form.Label>Street Address</Form.Label>
                <Form.Control ref={addressRef} required />
              </Form.Group>
              <Form.Row>
                <Col>
                  <Form.Group id="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control ref={cityRef} required />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group id="postalCode">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control ref={postalCodeRef} required />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Row>
                <Col>
                  <Form.Group id="contName">
                    <Form.Label>Contact Name</Form.Label>
                    <Form.Control ref={contNameRef} required />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group id="phone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="phone" ref={phoneRef} required />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordConfirmRef}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox">
                  <Form.Check.Input
                    onChange={() => {
                      setAccept(!accept);
                    }}
                  />
                  <Form.Check.Label>
                    By checking this box, you declare that you have read and
                    agreed to our <Link to="/terms">Terms and Conditions</Link>
                  </Form.Check.Label>
                </Form.Check>
              </Form.Group>
              <Button
                style={{ backgroundColor: "#2e186a", border: "none" }}
                disabled={loading}
                className="w-100"
                type="submit"
              >
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </Container>
  );
}
