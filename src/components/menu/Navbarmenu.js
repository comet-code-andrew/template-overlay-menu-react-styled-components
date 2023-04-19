import { CloseButton, Overlay, OverlayContent, OverlayLinks } from './Navbarmenu.styles'

import React from 'react';

const Navbar = () => {

  const openNav = () => {
    document.getElementById("myNav").style.width = "100%";
  }

  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
  }

  return (
    <>
      <Overlay id="myNav">
        <CloseButton href="javascript:void(0)" onClick={closeNav}>&times;</CloseButton>
        <OverlayContent>
          <OverlayLinks href="#">About</OverlayLinks>
          <OverlayLinks href="#">Services</OverlayLinks>
          <OverlayLinks href="#">Clients</OverlayLinks>
          <OverlayLinks href="#">Contact</OverlayLinks>
        </OverlayContent>
      </Overlay>

      <h2>Simple as possible Overlay menu example with React and Styled Components</h2>

      {/* Conditionally render this button to create a responsive mobile menu */}
      <span onClick={openNav}>&#9776; open</span>
    </>
    )
}

export default Navbar;