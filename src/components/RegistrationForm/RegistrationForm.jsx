import { useEffect } from "react";
import ReactDOM from "react-dom";
import Button from "../Button/Button";
import Form from "../Form";
import {
  StyledImage,
  StyledImageWrapper,
  StyledOverlay,
  StyledRegistrationFormWrapper,
  StyledRegistrationForm,
  StyledFormWrapper,
} from "./RegistrationForm.style";

const RegistrationForm = ({ onClose }) => {
  // side effects
  useEffect(() => {
    document.addEventListener("keyup", (e) => {
      if (e.key === "Escape") onClose();
    });
  }, [onClose]);

  const modal = (
    <>
      <StyledOverlay></StyledOverlay>
      <StyledRegistrationFormWrapper>
        <StyledRegistrationForm>
          <StyledImageWrapper>
            <div className="logo-container">
              <div className="logo"></div>
              <p className="logo-text">rand.</p>
            </div>
            <StyledImage></StyledImage>
            <div>
              <p className="image-bottom-text">
                Start for free & Get <br />
                Attractive offers Today !
              </p>
            </div>
          </StyledImageWrapper>
          <StyledFormWrapper>
            <h3 className="get-started">Get Started</h3>
            <p>Already have an account?</p>
            <p className="p-text-login">Log In</p>
            <div className="btn-wrapper">
              <Button
                text="Sign up"
                theme="primary"
                icon={<i className="fa-brands fa-google"></i>}
              />
              <Button
                text="Sign up"
                theme="secondary"
                icon={<i className="fa-brands fa-facebook"></i>}
              />
            </div>
            <p className="p-text-or">Or</p>
            <Form />
          </StyledFormWrapper>
        </StyledRegistrationForm>
      </StyledRegistrationFormWrapper>
    </>
  );
  return ReactDOM.createPortal(modal, document.getElementById("portal"));
};

export default RegistrationForm;
