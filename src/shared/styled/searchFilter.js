import styled from 'styled-components';

export default styled.div`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;

  @media screen and (max-width: 470px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
      margin-top: 20px;
    }
  }
`;
