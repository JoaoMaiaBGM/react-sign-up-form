import styled from "styled-components";

export const DashBoardContainer = styled.div`
  width: 100%;
  margin-top: -200px;

  @media screen and (min-width: 768px) {
    width: 90%;
    margin-top: -250px;
  }

  @media screen and (min-width: 1024px) {
    width: 80%;
    margin-top: -350px;
  }
`;

export const DashboardHeader = styled.header`
  width: 95%;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  img {
    width: 97px;
    height: 18px;
  }

  @media screen and (min-width: 1024px) {
    img {
      width: 130px;
      height: 25px;
    }
  }

  .logout {
    width: 75px;
    height: 18px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 7px;
    gap: 9px;

    background: #212529;
    border-radius: 4px;

    text-decoration: none;
    font-family: sans-serif;
    font-weight: 600;
    font-size: 12px;
    text-align: center;
    color: #f8f9fa;
    cursor: pointer;
    transition: 145ms;
  }

  @media screen and (min-width: 1024px) {
    .logout {
      width: 100px;
      height: 30px;

      font-weight: 600;
      font-size: 15px;
      text-align: center;
      color: #f8f9fa;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 12px;
  gap: 10px;

  background: #121214;

  border-top: 1px solid #212529;
  border-bottom: 1px solid #212529;

  .userName {
    font-family: sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: #f8f9fa;
    line-height: 28px;
  }

  @media screen and (min-width: 1024px) {
    .userName {
      font-family: sans-serif;
      font-weight: 700;
      font-size: 25px;
      color: #f8f9fa;
      line-height: 28px;
    }
  }

  .userModule {
    font-family: sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: #868e96;

    @media screen and (min-width: 1024px) {
      border-top: 1px solid #212529;
      border-bottom: 1px solid #212529;
      border-width: 200%;

      font-family: sans-serif;
      font-weight: 400;
      font-size: 16px;
      color: #868e96;
    }
  }
`;

export const WarningContainer = styled.div`
  padding: 0 12px;

  .warningTitle {
    text-align: start;
    font-family: sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 28px;
    color: #f8f9fa;
  }

  @media screen and (min-width: 1024px) {
    .warningTitle {
      text-align: start;
      font-family: sans-serif;
      font-weight: 700;
      font-size: 22px;
      line-height: 28px;
      color: #f8f9fa;
    }
  }

  .warningParagraph {
    text-align: start;
    font-family: sans-serif;
    font-weight: 400;
    font-size: 11px;
    line-height: 24px;
    color: #ffffff;
  }

  @media screen and (min-width: 1024px) {
    .warningParagraph {
      text-align: start;
      font-family: sans-serif;
      font-weight: 400;
      font-size: 15px;
      line-height: 24px;
      color: #ffffff;
    }
  }
`;
