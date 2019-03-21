import styled from 'styled-components';

export default styled.span`
  color: ${props => (props.light ? '#fff' : '#000')};
  font-weight: bold;
  font-size: 13px;
`;
