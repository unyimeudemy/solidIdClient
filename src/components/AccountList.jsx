import React from 'react';
import styled from 'styled-components';
import  Microsoft  from '../Images/Microsoft.png'
import  google  from '../Images/google.png'
import  facebook  from '../Images/facebook.png'



export const AccountList = ({
    organizationList,
    setOrganizationList
}) => {

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #d9d9d910;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    z-index: 3;
  `;

const Wrapper = styled.div`
    width: 350px;
    height: 500px;
    background-color: #EEEEEE;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.25);
  border: 1px solid #31363F;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

const Title = styled.div`
    font-size: 40px;
    font-weight: 600;
    color: #31363F;
    margin-bottom: 30px;
`

const List = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: center; */
    gap: 5px;
    flex-direction: column;
    width: 100%;
    height: 400px;

`
const Hr = styled.hr`
    width: 100%;
    color: #31363F;
    margin: 0px;
`

const ListItem = styled.div`
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;

    :hover {
    cursor: pointer;
    background-color: white;
  }
`
const Logo = styled.img`
    width: 35px;
    height: 35px;
`

const OrganizationName = styled.div`
    width: 80%;
    background-color: transparent;
    height: 35px;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 400;
    padding-left: 10px;

`

const CloseButton = styled.div`
  border-radius: 10px;
  width: 90%;
  height: 40px;
  color: white;
  padding: 5px 15px;
  background-color: #426e70;
  border: 1px solid #426e70;
  font-weight: 900;
  font-size: large;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`

  return (
    <Container>
        <Wrapper>
            <Title>Organizations</Title>
            <List>
            <Hr/>
            <ListItem 
            onClick={() => {setOrganizationList(!organizationList)}}
            >
                <Logo src={Microsoft} alt='Microsoft'/>
                <OrganizationName>Microsoft</OrganizationName>
            </ListItem>
            <Hr/>
            <ListItem
            onClick={() => {setOrganizationList(!organizationList)}}
            >
            <Logo src={google} alt='Google'/>
            <OrganizationName>Google</OrganizationName>
            </ListItem>
            <Hr/>
            <ListItem
            onClick={() => {setOrganizationList(!organizationList)}}
            >
            <Logo src={facebook} alt='Facebook'/>
            <OrganizationName>Facebook</OrganizationName>
            </ListItem>
            <Hr/>
            </List>
            <CloseButton
            onClick={() => {setOrganizationList(!organizationList)}}
            >Close</CloseButton>
        </Wrapper>
    </Container>
  )
}