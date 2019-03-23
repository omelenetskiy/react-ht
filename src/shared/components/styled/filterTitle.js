import styled from "styled-components";

export default styled.span`
  color: ${props =>
    props.color === "light" ? "#fff" : props.theme.stylishColor};
  font-weight: bold;
  font-size: 13px;
`;
