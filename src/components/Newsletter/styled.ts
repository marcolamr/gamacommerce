import styled from 'styled-components';

export const Section = styled.section`
  padding: 120px 0 80px 0;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    font-size: 14px;
    font-weight: 500;
    color: #222222;
  }

  p {
    font-size: 12px;
    font-weight: normal;
    color: #696969;
  }

  div {
    padding-top: 30px ;
    input {
      width: 450px;
      height: 50px;
      background: none;
      border: 1px solid #222222;
      border-radius: 15px 0 0 15px;
      padding-left: 30px;
    }
    
    button {
      width: 160px;
      height: 50px;
      background: #222222;
      border-radius: 0 15px 15px 0;
      font-size: 14px;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      color: white;
      cursor: pointer;

      transition: all 0.2s;
      
      &:hover {
        background: #333333;
      }
    }
  }
`; 