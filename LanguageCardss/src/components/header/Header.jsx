import React from 'react'
import  Container  from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import react from "../../assets/react.svg"


const Header = () => {
  return (
    <Container>
        <Image fluid src={react} width="250px"></Image>
    </Container>
  )
}

export default Header