import styled from "styled-components";

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  /* background-color: rgba(0, 0, 0, 0.3); */
`;

export const StyledRegistrationFormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;
export const StyledRegistrationForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #ff2b2b;
  border-radius: 5px;

  max-width: 1024px;
`;
// Image section

export const StyledImageWrapper = styled.div`
  background-color: #f4877d;
  padding: 1em;

  .logo-container {
    display: flex;
  }

  .logo {
    background-image: url("https://svgshare.com/i/_go.svg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 40px;
    width: 40px;
  }
  .logo-text {
    color: #fff;
    font-size: 32px;
    margin: 0;
  }

  .image-bottom-text {
    color: #fff;
    font-size: 18px;
    text-align: center;

    padding: 12px;
  }

  @media screen and (min-width: 1024px) {
    padding: 2em 3em;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const StyledImage = styled.div`
  background-image: url("https://svgshare.com/i/_gZ.svg%27%20title=%27illustration");
  background-repeat: no-repeat;
  background-size: contain;

  width: 400px;
  height: 450px;

  @media screen and (min-width: 1024px) {
    width: 450px;
  }
`;

// Form section

export const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;

  gap: 0.4em;

  .p-text-login {
    color: #f4877d;
  }
  .get-started {
    font-size: 30px;
  }
  .btn-wrapper {
    display: flex;
    gap: 15px;
    margin: 10px 0px;
  }
  .p-text-or {
    text-align: center;
    font-size: 26px;
  }
  @media screen and (max-width: 768px) {
    padding: 2em 3em;
  }

  @media screen and (min-width: 815px) {
    padding: 1em;
  }
  @media screen and (min-width: 1024px) {
    padding: 2em 3em;
  }
`;
