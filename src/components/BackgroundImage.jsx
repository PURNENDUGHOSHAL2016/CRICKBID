import React from 'react'
import background from "../assets/login.jpg";
import styled from 'styled-components';
import Image from 'react-bootstrap/Image'
export default function BackgroundImage() {
  return (
    <div>
        <Container>
            <Image src={background} alt='background' fluid/>
        </Container>
    </div>
  )
}
const Container = styled.div`
height: 100vh;
width: 100vw;
img{
    height: 100vh;
    width: 100vw; 
}
`;
