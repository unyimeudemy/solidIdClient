import React, { useState } from 'react'
import styled from 'styled-components'
import { Header } from '../components/Header'
import { rihanna } from '../Images/ImageUrls'
import { AccountList } from '../components/AccountList.jsx';

export const ProfilePage = () => {
    const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    `
    
    const Wrapper = styled.div`
        display: flex;
        flex-direction: row;
        background-color: white;
        width: 75%;
        height: 80%;
        border-radius: 15px;
    `
    
    const Right = styled.div`
        height: 100%;
        width: 67%;
        background-color: transparent;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        padding: 30px;
        gap: 10px;
    `
    
    const Left = styled.div`
        height: 100%;
        width: 33%;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px;
    `
    

    
    const Title = styled.div`
        font-size: 35px;
        font-weight: 800;
        color: #31363F;
        margin-bottom: 40px;
    `
    
    const Input = styled.div`
        height: 40px;
    width: 300px;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    `
    
    const Button = styled.button`
    background-color: #395e60;
    border: 1px solid #395e60;
    height: 47px;
    color: white;
    font-size: 20px;
      width: 120px;
      color: white;
      padding: 5px 15px;
      font-weight: 900;
      font-size: large;
      cursor: pointer;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
    `
    
    const Box = styled.div`
    width: 100%;
    height: 50px;
    background-color: #EEEEEE;
    display: flex;
    align-items: center;
    justify-content: center;
    `
    const Box2 = styled.div`
    width: 100%;
    height: 30px;
    background-color: transparent;
    display: flex;
    align-items: center;
    gap: 10px;
    /* justify-content: center; */
    `
    
    const DetailHeader = styled.div`
        font-size: 35px;
        font-weight: 800;
        color: #31363F;
    `
    
    const ProfilePic = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 10px;
    `
    
    const Key = styled.div`
        font-size: 20px;
        font-weight: 900;
    `
    const Value = styled.div`
        font-size: 20px;
        font-weight: 700;
    `


const Field = styled.div`
    height: 45px;
    background-color: #EEEEEE;
    border: none;
    font-size: 20px;
    width: 200px;
    font-weight: 400;
      cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #395e60;

`;

const [organizationList, setOrganizationList] = useState(false);

    
      return (
        <>
        <Container>
            <Header/>
            <Wrapper>
                <Right>
                    <Box>
                        <DetailHeader>Profile</DetailHeader>
                    </Box>
                    <ProfilePic src={rihanna} alt='Rihanna'/>
                    <Box2>
                        <Key>Key: </Key>
                        <Value>Value value</Value>
                    </Box2>
                    <Box2>
                        <Key>Key: </Key>
                        <Value>Value value</Value>
                    </Box2>
                    <Box2>
                        <Key>Key: </Key>
                        <Value>Value value</Value>
                    </Box2>
                </Right>
                <hr></hr>
                <Left>
                    <Title>Generate token</Title>
                    <Input>
                        <Field
                        onClick={() => {setOrganizationList(!organizationList)}}
                        >Choose account</Field>
                        { organizationList && <AccountList 
                        organizationList = {organizationList}
                        setOrganizationList = {setOrganizationList}
                        />}
                        <Button>Generate</Button>
                    </Input>
                </Left>
            </Wrapper>
        </Container>
        </>
      )
}
