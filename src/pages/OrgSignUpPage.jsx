import React, { useState } from 'react'
import styled from "styled-components";
import { SolidIDLogo } from '../components/SolidIDLogo';
import Axios from '../lib/api/axios';
import Cookies from "js-cookie"
import {useNavigate} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import { loginSuccess } from '../redux/slices/userSlice';
import { getOrgProfile } from '../lib/getOrgProfile';




 const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 90px;
/* margin-top: 50px; */
height: auto;
background-color: #EEEEEE;
`

 const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;
    width: 500px;
    align-items: center;
    justify-content: center;
    
`


 const Input = styled.input`
  background-color: transparent;
  width: 80%;
  height: 40px;
  outline: none;
  color: #424656;
  border: 1px solid #3f4a5a;
  border-radius: 6px;
  padding: 5px;
  margin-bottom: 20px;
`;

 const Title = styled.div`
    color: #76ABAE;
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 20px;
`

 const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 150px;
    width: 80%;
    height: 35px;
`

 const Button = styled.button`
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

const Top = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`



export const OrgSignUpPage = () => {
    const [orgEmail, setOrgEmail] = useState("")
    const [orgPassword, setOrgPassword] = useState("")
    const [orgPasswordConfirm, setOrgPasswordConfirm] = useState("")
    const [baseAccEmail, setBaseAccEmail] = useState("")
    const [baseAccPassword, setBaseAccPassword] = useState("")
    const [orgName, setOrgName] = useState("")
    const [role, setRole] = useState("")

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignUp = async (e) => {
        e.preventDefault();

        try{
            const res = await Axios.post(
                "/org/auth/signup",
                {
                    email: orgEmail,
                    password: orgPassword,
                    repEmail: baseAccEmail,
                    repPassword: baseAccPassword,
                    organizationName: orgName,
                    role: role
                }
            )
 
            const AccessToken = res.data.token;
            Cookies.set("AccessToken", AccessToken, {expires: 7 * 4 * 3});
            const userDetail = await getOrgProfile(AccessToken);
            dispatch(loginSuccess(userDetail.data));
            navigate("/");
        }catch(error){
            console.log(error);
        }
    }

    const {user }= useSelector((state) => state.user);
    console.log(user);

  return (
    <Wrapper>
    <Container>
        <Top>
        <SolidIDLogo/>
        <Title>Sign in as an organization</Title>
        </Top>
        <>
        <Input
        type='text'
        placeholder='Organization email'
        onChange={(e) => setOrgEmail(e.target.value)}
        />
        <Input
            type='password'
            placeholder='Organization password'
        onChange={(e) => setOrgPassword(e.target.value)}
        />
        <Input
            type='password'
            placeholder='Organization password confirm'
        onChange={(e) => setOrgPasswordConfirm(e.target.value)}

        />
        <Input
            type='text'
            placeholder='Base account email'
        onChange={(e) => setBaseAccEmail(e.target.value)}

        />
        <Input
            type='password'
            placeholder='Base account password'
        onChange={(e) => setBaseAccPassword(e.target.value)}

        />
        <Input
            type='text'
            placeholder='Organzation name'
        onChange={(e) => setOrgName(e.target.value)}

        />
        <Input
            type='text'
            placeholder='USER or ORG'
        onChange={(e) => setRole(e.target.value)}

        />
        </>
        <Buttons>
            <Button
            onClick={handleSignUp}
            >
                <div>Sign up </div>
            </Button>
        </Buttons>
    </Container>
</Wrapper>
  )
}
