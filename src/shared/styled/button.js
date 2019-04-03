import styled from 'styled-components';

export default styled.button`
  border: 0;
  padding: 7px 15px;
  color: #fff;
  width: ${(props) => props.size === 'large' && '150px'};
  background-color: ${(props) => props.theme.dangerColor};
  font-weight: bold;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;

  &:hover {
    background-color: ${(props) => props.theme.dangerColorDark};
  }
`;
