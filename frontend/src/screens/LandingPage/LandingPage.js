import React, { useEffect } from "react";
import "./LandingPage.css";
import { Container, Button, Row } from "react-bootstrap";

export const LandingPage = ({ history }) => {
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      history.push("/myrecipes");
    }
  }, [history]);

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Whisk</h1>
              <p className="subtitle">
                All of your recipes together in one place.
              </p>
              <div className="buttonContainer">
                <a href="/login">
                  <Button size="lg" className="landingbutton">
                    Login
                  </Button>
                </a>
                <a href="/register">
                  <Button size="lg" className="landingbutton">
                    Signup
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
