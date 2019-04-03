import styled from 'styled-components';

export default styled.input`
  width: 100%;
  padding: 15px 0px;
  text-indent: 15px;
  background-color: black;
  border: none;
  border-bottom: 5px solid ${(props) => props.theme.dangerColor};
  margin: 10px 0px;
  color: #fff;

  &:focus {
    outline: 2px solid ${(props) => props.theme.dangerColor};
  }
`;
