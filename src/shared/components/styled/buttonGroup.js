import styled from "styled-components";

export default styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;

  .filter-buttons {
    position: relative;
    margin: 0 15px;

    label {
      background-color: ${props => props.type === "sort" && "transparent"};
      color: ${props => props.type === "sort" && "#000"};
    }

    input:checked + label {
      color: ${props => props.type === "sort" && props.theme.dangerColorDark};
    }

    input + label {
      color: ${props => props.type === "sort" && props.theme.stylishColor};
    }
  }
`;
