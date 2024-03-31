import React from 'react'
import styled from 'styled-components'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AssessmentIcon from '@mui/icons-material/Assessment';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import {useNavigate} from "react-router-dom";
import {  useSelector } from 'react-redux';


export const Header = () => {

const Container = styled.div`
    height: 70px;
    width: 100%;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    /* align-items: flex-start; */
`

const Logo = styled.div`
  color: #31363F;
  font-size: 50px;
  font-weight: 900;
  margin-left: 60px;
  cursor: pointer;
 
  `

const Tabs = styled.div`
    width: 40%;
    height: 100%;
    /* background-color: #76ABAE; */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
`

const Text = styled.div`
    color: #263f40;
  font-size: 15px;
  font-weight: 600;
`
const Tab = styled.div`
display: flex;
gap: 10px;
align-items: center;
justify-content: center;
    
`

const ProfileButton = styled.button`
  :hover {
    cursor: pointer;
    background-color: #426e70;
    color: #EEEE;
  }


      border-radius: 10px;
  width: 120px;
  height: 40px;
  color: #426e70;
  padding: 5px 15px;
  background-color: #EEEE;
  border: 1px solid #426e70;
  font-weight: 600;
  font-size: medium;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`

const Txt = styled.div`
width: 100%;
/* height: 100%; */
`

const SignInButton = styled.button`
      border-radius: 10px;
  width: 120px;
  height: 40px;
  color: #426e70;
  padding: 5px 15px;
  background-color: #EEEE;
  border: 1px solid #426e70;
  font-weight: 600;
  font-size: medium;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
cursor: pointer;


  :hover {
    background-color: #426e70;
    color: #EEEE;
  }


`

const navigate = useNavigate();
const {currentUser} = useSelector((state) => state.user);


  return (
    <Container>
        <Logo onClick={() => navigate("/")}>SOLID ID</Logo>
        <Tabs>
            <Tab>
            <SupportAgentIcon  htmlColor='#263f40'/> 
            <Text>Services</Text>
            </Tab>
        <Tab>
        <AssessmentIcon  htmlColor='#263f40'/>
        <Text>Reports</Text>
        </Tab>
        <Tab>
        <GroupsIcon  htmlColor='#263f40'/>
        <Text>Partners</Text>
        </Tab>
        {currentUser ? <ProfileButton onClick={() => navigate(`/profile`)}>
            <PersonIcon/>
            <Txt>Profile</Txt>
        </ProfileButton> :
        <SignInButton
        onClick={() => navigate(`/sign_in`)}
        >Sign in</SignInButton>
        }
        </Tabs>
    </Container>
  )
}
