import Logo from "../Images/postman.png";
import { Typography, styled, Box } from '@mui/material'
import {NavLink} from 'react-router-dom'

const Header = () => {
    const Images = styled('img')`
        width:100px;
    `
    const Main = styled(Box)`
    display:flex;
    align-items: center;
    `
    const Tabs = styled(Typography)`
    color:#f2683A;
    font-size:20px;
    line-height:14px !important;
    font-famil:emoji;
    `
    const Link=styled(NavLink)`
    text-decoration:none;
    display:flex;
    align-items:center
    `
    return (
        <>
            <Main>
                <Link to="http://localhost:3000/">
                    <Images src={Logo} alt="logo" />
                    <Tabs>POSTMAN Clone</Tabs>
                </Link>
            </Main>
        </>
    )
}

export default Header