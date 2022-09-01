import { useState } from "react";
import {
  StyledForm,
  StyledInputWrapper,
  StyledInputContainer,
} from "./Form.style";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <StyledForm>
      <StyledInputWrapper>
        <label htmlFor="name">Name</label>
        <StyledInputContainer>
          <span>
            <i className="fa fa-user"></i>
          </span>
          <input
            type="text"
            placeholder="Joy Shaheb"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </StyledInputContainer>
      </StyledInputWrapper>
      <StyledInputWrapper>
        <label htmlFor="email">Email</label>
        <StyledInputContainer>
          <span>
            <i className="fa fa-envelope"></i>
          </span>
          <input
            type="email"
            placeholder="abc@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </StyledInputContainer>
      </StyledInputWrapper>
      <StyledInputWrapper>
        <label htmlFor="password">Password</label>
        <StyledInputContainer>
          <span>
            <i className="fa fa-light fa-lock"></i>
          </span>
          <input
            type="password"
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </StyledInputContainer>
      </StyledInputWrapper>
      <div className="submit-container">
        <input type="submit" className="btn-submit" />
      </div>
    </StyledForm>
  );
};

export default Form;
