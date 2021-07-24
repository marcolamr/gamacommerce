import styled from 'styled-components';

export const Title = styled.div`
  background-color: #AEFFC6;
  height: 120px;
  font-size: 40px;
  font-weight: bold;
  color: white;
  padding-left: 70px;

  display: flex;
  align-items: center;
`;

export const Container = styled.section`
  background-color: #EEEEEE;
  padding-top: 30px;

  display: flex;
  justify-content: center;

  div {
    display: flex;

    div {
      flex-direction: column;
      padding: 10px 0 10px 30px;
      justify-content: space-around;
      
      h1 {
        font-size: 20px;
        font-weight: 500;
        color: #222222;
      }

      p {
        font-size: 18px;
        font-weight: normal;
        color: #696969;
      }
      
      h3 {
        font-size: 20px;
        font-weight: normal;
        color: #696969;
      }
    }
  }
`;

export const BG = styled.div`
  background-color: #EEEEEE;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px;
  }
`;

export const Row = styled.div`
  display: flex;
  margin: 0 auto;
  width: 50%;

  text-align: center;

  .column {
    flex: 50%;
    margin-top: 30px;

    input {
      width: 95%;
      height: 50px;
      padding: 20px;
      border: 1px solid #222222;
      border-radius: 15px;
      background-color: #EEEEEE;
    }
  }

  button {
    width: 97.5%;
    height: 50px;
    background-color: #222222;
    border-radius: 15px;
    font-size: 14px;
    font-weight: 500;
    color: white;

    margin: 30px auto;
    cursor: pointer;
  }
`;