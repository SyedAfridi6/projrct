import React from 'react'
import styled from 'styled-components'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
function Header() {
    return(
        <Wrapper>
           <LogoWrapper>
                <div>
                      <MenuIcon />
                </div>
                <img src='https://www.cmspecialist.nl/userdata/image/inboxify-logo.png' />
           </LogoWrapper>

        </Wrapper>
    )
}

export default Header

 const Wrapper = styled.div

       