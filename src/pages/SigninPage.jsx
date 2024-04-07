import React, { useState } from 'react'
import { Button, Buttons, Container, Input, Logo, Title, Wrapper } from '../Styling/signStyles'
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';
import Axios from '../lib/api/axios';
import {  useDispatch, useSelector } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from "../redux/slices/userSlice.js";
import { getUserProfile } from '../lib/getUserProfile.js';
import { SolidIDLogo } from '../components/SolidIDLogo.jsx';
import styled from "styled-components";
import InfoIcon from '@mui/icons-material/Info';



const OrgSigUpLink = styled.div`
color: #31363F;
display: flex;
font-weight: 600;
text-decoration: underline;
margin-top: 20px;
cursor: pointer;
`

export const SigninPage = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();


    // dispatch(loginSuccess("login successful"));
    // const  {currentUser}  = useSelector((state) => state.user);
    // console.log(currentUser);

    const handleSignin = async () => {
    try{
        const res = await Axios.post(
            "/user/auth/signin",
            {
                email,
                password
            }
        )
        
        const AccessToken = res.data.token;
        Cookies.set("AccessToken", AccessToken, {expires: 7 * 4 * 3});
        const userDetail = await getUserProfile();
        dispatch(loginSuccess(userDetail.data));
        navigate("/");
    }catch(error){
        console.log(error.message);
        dispatch(loginFailure());
    }
    }


    

    return (
        <Wrapper>
            <Container>
                <SolidIDLogo/>
                <Title>Sign in</Title>
                <>
                <Input
                type='text'
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type='password'
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                </>
                <Buttons>
                    <Button
                    onClick={handleSignin}
                    >
                        <div>Sign in </div>
                    </Button>
                </Buttons>
            </Container>
            <OrgSigUpLink
        onClick={() => navigate("/org_sign_in")}
        >
            <InfoIcon/>
            <div>Click here to sign up as an organization</div>
        </OrgSigUpLink>
        </Wrapper>
      )
}
