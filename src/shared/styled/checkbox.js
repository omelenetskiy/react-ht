import styled from 'styled-components';

export default styled.input`
  position: absolute;
  height: 0;
  width: 0;
  overflow: hidden;

  &:checked + label {
    background-color: ${(props) => props.theme.dangerColorDark};
  }

  & + label {
    background-color: ${(props) => props.theme.stylishColor};
  }
`;
