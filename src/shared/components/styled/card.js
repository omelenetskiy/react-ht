import styled from "styled-components";

export default styled.div`
  max-width: ${props => props.theme.cardMaxWidth};
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: ${props => props.theme.stylishColor};

  .card-img {
    width: 100%;
    height: 300px;
  }

  .card-body {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;

    .card-title {
      margin: 0;
      font-size: 14px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      text-transform: uppercase;
    }

    .badge {
      font-size: 12px;
      border: 1px solid ${props => props.theme.stylishColorLight};
      border-radius: 2px;
      padding: 2px;
    }
  }

  .card-footer {
    max-width: 100%;
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 12px;
    padding: 5px;
  }
`;
