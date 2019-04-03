import styled from 'styled-components';

export default styled.article`
  color: #fff;
  background: transparent;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  padding: 20px 0;

  .card-img {
    width: 250px;
    height: 100%;
    margin-right: 30px;
  }

  .card-body {
    color: ${(props) => props.theme.stylishColorLight};
  }

  .card-title {
    color: ${(props) => props.theme.dangerColor};
    display: inline-flex;
    align-items: center;
    line-height: 1;

    h1 {
      font-size: 2em;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid ${(props) => props.theme.stylishColorLight};
      color: ${(props) => props.theme.stylishColorLight};
      border-radius: 50%;
      font-size: 20px;
      width: 45px;
      height: 45px;
      margin: 0 20px;
    }
  }

  .card-time {
    b:first-child {
      margin-right: 30px;
    }
  }

  .card-text {
    line-height: 1.35em;
  }
`;
