import styled from 'styled-components';

export const Container = styled.div`
  background-color: #EEEEEE;
  min-height: 500px;
`; 

export const Content = styled.div`
  padding: 65px 20px 20px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #222222;
  }

  p {
    font-family: 'Libre Baskerville', serif;
    font-size: 14px;
    font-weight: normal;
    color: #878787;
  }
`; 

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  
  div {
    width: 220px;
    margin: 50px;

    h3 {
      margin-top: 12px;
      font-size: 14px;
      font-weight: 500;
      color: #222222;
    }

    p {
      font-size: 12px;
      font-weight: normal;
      color: #696969;
    }

    span {
      margin-top: 12px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      h4 {
        font-size: 14px;
        font-weight: normal;
        color: #696969;
      }

      button {
        background: #AEFFC6;
        width: 110px;
        height: 26px;
        font-size: 14px;
        font-weight: normal;
        text-decoration: none;
        color: #222222;
        cursor: pointer;

        transition: all 0.2s;

        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          background: #7DFFA3;
        }
      }
    }
  }
`;