import styled from "styled-components";


export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 90px;
background-color: #EEEEEE;
/* margin-top: 50px; */
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;
    width: 500px;
    border: 0.5px solid #222831;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    
`

export const Logo = styled.div`
    color: #3f4a5a;
    font-size: 60px;
    font-weight: bolder;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`

export const Input = styled.input`
  background-color: transparent;
  width: 80%;
  height: 35px;
  outline: none;
  color: #424656;
  border: 1px solid #3f4a5a;
  border-radius: 6px;
  padding: 5px;
  margin-bottom: 20px;
`;

export const Title = styled.div`
    color: #76ABAE;
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 20px;
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 150px;
    width: 80%;
    height: 35px;
`

export const Button = styled.button`
    border-radius: 10px;
  color: white;
  padding: 5px 15px;
  border: 1px solid #3f4a5a;
  background-color: #3f4a5a;
  /* border: none; */
  font-weight: 500;
  font-size: medium;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-weight: 700;
  height: 60px;
  width: 100%;

  margin-bottom: 20px;
`;

export const Body = styled.div`
    height: 100%;
    width: 100%;
`