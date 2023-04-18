import Logo from "../Images/postman.png";
import {styled} from '@mui/material'

const Header=()=>{
    const Images=styled('img')`
        width:200px;
    `
    return(
        <>
        <Images src={Logo} alt="logo" />
        </>
    )
}

export default Header