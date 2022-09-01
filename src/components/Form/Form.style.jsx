import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  width: 100%;
  height: 100%;
  gap: 1em;
  .submit-container {
    width: 100%;
    z-index: 2;
    margin-top: 5px;
  }

  .btn-submit {
    border: none;
    border-radius: 5px;

    width: 100%;
    height: 40px;

    background-color: #f4877d;
    color: #fff;

    font-size: 16px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;

export const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 15px;

  border: 1px solid #c0c0c0;
  border-radius: 5px;
  width: 100%;

  input {
    border: none;
    outline: none;
    height: 20px;
    width: 100%;
    z-index: 1;
  }
`;
