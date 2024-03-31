import styled from "styled-components";
import {
    //   createBrowserRouter,
    //   RouterProvider,
    BrowserRouter,
    Routes,
    Route,
    //   Link,
  } from "react-router-dom";
import { SignupPage } from "./pages/SignupPage.jsx";
import { LandingPage } from "./pages/LandingPage.jsx";
import { SigninPage } from "./pages/SigninPage.jsx";
import { VerificationPage } from "./pages/VerificationPage.jsx";
import { ProfilePage } from "./pages/ProfilePage.jsx";



function App() {

const Container = styled.div`
    background-color: #EEEEEE;
    height: 100vh;
`

  return (
    <BrowserRouter basename ="/">
        <Container>
            <Routes>
                <Route path="/">
                    <Route index element= {<LandingPage/>} />
                    <Route path="/sign_up" element={<SignupPage/>}/>
                    <Route path="/sign_in" element={<SigninPage/>}/>
                    <Route path="/verify" element={<VerificationPage/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                </Route>
            </Routes>
        </Container>
    </BrowserRouter>

  );
}

export default App;
