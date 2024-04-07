import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Buttons, Container, Input, Logo, Title, Wrapper } from '../Styling/signStyles';
import { useNavigate } from 'react-router-dom';
import Axios from '../lib/api/axios';
import Cookies from 'js-cookie';
import { SolidIDLogo } from '../components/SolidIDLogo';
import InfoIcon from '@mui/icons-material/Info';

const OrgSigUpLink = styled.div`
color: #31363F;
display: flex;
font-weight: 600;
text-decoration: underline;
margin-top: 20px;
cursor: pointer;
`

export const SignupPage = () => {
    const [slide, setSlide] = useState(1);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirm, setPasswordConfirm] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [otherName, setOtherName] = useState();
    const [age, setAge] = useState();
    const [nationality, setNationality] = useState();
    const [stateOfOrigin, setStateOfOrigin] = useState();
    const navigate = useNavigate(); 



    const handleNext = () => {
        if(slide <= 3){setSlide(i => i + 1);}
    }
    const handleBack = () => {
        if(slide <= 3){setSlide(i => i - 1);}
    }

    const handleSummit = async () => {
        try{
            if(password === passwordConfirm){
            const res = await Axios.post(
                "/user/auth/signup",
                {
                    email,
                    password,
                    firstName,
                    lastName,
                    otherName,
                    nationality,
                    age,
                    stateOfOrigin
                }
            )
            console.log("token: ", res.data.token);
            const AccessToken = res.data.token;
            Cookies.set("AccessToken", AccessToken, {expires: 7 * 4 * 3});
            navigate("/");
            }
        }catch(error){
            console.log("Error 💥💥",error.message);
        }
    }


  return (
    <Wrapper>
        <Container>
            <SolidIDLogo/>
            <Title>Sign up</Title>
            { slide === 1 && <>
            <Input
            type='email'
            placeholder='Email'
            onChange={(e) => {setEmail(e.target.value)}}
            />
            <Input
                type='password'
                placeholder='Password'
                onChange={(e) => {setPassword(e.target.value)}}
            />
            <Input
            type='password'
            placeholder='Password confirm'
            onChange={(e) => {setPasswordConfirm(e.target.value)}}

            />
            </>}
            { slide === 2 && <>
            <Input
            type='text'
            placeholder='First name'
            onChange={(e) => {setFirstName(e.target.value)}}
            />
            <Input
                type='text'
                placeholder='Last name'
                onChange={(e) => {setLastName(e.target.value)}}
            />
            <Input
            type='text'
            placeholder='Other names'
            onChange={(e) => {setOtherName(e.target.value)}}

            />
            </>}
            { slide === 3 && <>
            <Input
            type='text'
            placeholder='Age'
            onChange={(e) => {setAge(e.target.value)}}
            />
            <Input
                type='text'
                placeholder='Nationality'
                onChange={(e) => {setNationality(e.target.value)}}
            />
            <Input
            type='text'
            placeholder='State of Origin'
            onChange={(e) => {setStateOfOrigin(e.target.value)}}
            />
            </>}

            {slide === 1 && <Buttons>
                <Button
                onClick={() => {navigate("/sign_in")}}
                >
                    Sign in 
                </Button>
                <Button
                onClick={() => {handleNext()}}
                >
                    Next 
                </Button>
            </Buttons>} 
            { slide === 2 &&
            <Buttons>
            <Button
            onClick={() => {handleBack()}}
            >
                Back 
            </Button>
            <Button 
            onClick={() => {handleNext()}}
            >
                Next 
            </Button>
        </Buttons>
            }{ slide === 3 &&
                <Buttons>
                <Button
                onClick={() => {handleBack()}}
                >
                    Back 
                </Button>
                <Button
                onClick={handleSummit}
                >
                    Summit 
                </Button>
            </Buttons>
            }
        </Container>
        <OrgSigUpLink
        onClick={() => navigate("/org_sign_up")}
        >
            <InfoIcon/>
            <div>Click here to sign up as an organization</div>
        </OrgSigUpLink>
    </Wrapper>
  )
}
