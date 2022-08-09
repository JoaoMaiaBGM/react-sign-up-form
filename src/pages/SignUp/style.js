import styled from "styled-components";

export const HeaderSignUp = styled.header`
  width: 300px;
  margin: 5px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  img {
    width: 97px;
    height: 18px;
  }

  .btnVoltar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 7px;
    gap: 9px;

    width: 75px;
    height: 18px;

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
`;

export const SignContainer = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 300px;

  background: #212529;
  box-shadow: 0px 3px 10px 2px rgba(0, 0, 0, 0.25);
  border-radius: 3px;

  @media screen and (min-width: 1024px) {
    height: 580px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 300px;

    background: #212529;
    box-shadow: 0px 3px 10px 2px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
  }

  h3 {
    font-family: sans-serif;
    font-weight: 700;
    font-size: 13px;
    color: #f8f9fa;
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    h3 {
      font-family: sans-serif;
      font-weight: 700;
      font-size: 16px;
      color: #f8f9fa;
      margin: 0;
    }
  }

  @media screen and (min-width: 1024px) {
    h3 {
      font-family: sans-serif;
      font-weight: 700;
      font-size: 20px;
      color: #f8f9fa;
      margin: 0;
    }
  }

  p {
    font-family: sans-serif;
    font-weight: 600;
    font-size: 8px;
    color: #868e96;
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    p {
      font-family: sans-serif;
      font-weight: 600;
      font-size: 11px;
      color: #868e96;
      margin: 0;
    }
  }

  @media screen and (min-width: 1024px) {
    p {
      font-family: sans-serif;
      font-weight: 600;
      font-size: 13px;
      color: #868e96;
      margin: 0;
    }
  }

  form {
    height: 420px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
  }

  @media screen and (min-width: 1024px) {
    form {
      height: 480px;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: space-between;
    }
  }

  label {
    margin-bottom: -5px;
    font-family: sans-serif;
    font-weight: 400;
    font-size: 10px;
    color: #f8f9fa;
  }

  @media screen and (min-width: 768px) {
    label {
      margin-bottom: -5px;
      font-family: sans-serif;
      font-weight: 400;
      font-size: 12px;
      color: #f8f9fa;
    }
  }

  @media screen and (min-width: 1024px) {
    label {
      margin-bottom: -5px;
      font-family: sans-serif;
      font-weight: 400;
      font-size: 14px;
      color: #f8f9fa;
    }
  }

  input {
    width: 250px;
    height: 25px;

    padding: 0px 13px;
    background: #343b41;
    border: 1px solid #f8f9fa;
    border-radius: 3px;

    font-family: sans-serif;
    font-weight: 400;
    font-size: 11px;
    color: #f8f9fa;
  }

  @media screen and (min-width: 768px) {
    input {
      width: 250px;
      height: 28px;

      padding: 0px 13px;
      background: #343b41;
      border: 1px solid #f8f9fa;
      border-radius: 3px;

      font-family: sans-serif;
      font-weight: 400;
      font-size: 12px;
      color: #f8f9fa;
    }
  }

  @media screen and (min-width: 1024px) {
    input {
      width: 250px;
      height: 30px;

      padding: 0px 13px;
      background: #343b41;
      border: 1px solid #f8f9fa;
      border-radius: 3px;

      font-family: sans-serif;
      font-weight: 400;
      font-size: 14px;
      color: #f8f9fa;
    }
  }

  select {
    width: 278px;
    height: 28px;
    padding: 0px 13px;

    background: #343b41;
    border: 1px solid #f8f9fa;
    border-radius: 3px;

    font-family: sans-serif;
    font-weight: 400;
    font-size: 11px;
    color: #f8f9fa;

    cursor: pointer;
  }

  select:hover {
    background: #212529;
  }

  span {
    font-family: sans-serif;
    font-size: 9px;
    color: #fe4c3fc7;
    text-align: start;

    margin-top: -3px;
  }

  @media screen and (min-width: 1024px) {
    span {
      font-family: sans-serif;
      font-size: 11px;
      color: #fe4c3fc7;
      text-align: start;

      margin-top: -3px;
    }
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 277px;
    height: 28px;
    background: #ff577f;
    border: 1px solid #ff577f;
    border-radius: 4px;
    font-family: sans-serif;
    font-weight: 500;
    font-size: 13px;
    color: #ffffff;
    cursor: pointer;
    transition: 145ms;
  }
`;
