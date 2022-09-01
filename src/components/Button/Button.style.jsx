import styled from "styled-components";

export const StyledButton = styled.button`
  border: 1px solid #c0c0c0;
  border-radius: 5px;
  width: 150px;
  height: 40px;

  font-size: 18px;
  &:hover {
    cursor: pointer;
  }
  span {
    padding-right: 8px;
  }
`;
