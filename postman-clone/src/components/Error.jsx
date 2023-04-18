import {Box,Typography, styled} from '@mui/material'

// styled components
    const Images=styled('img')`
    width:60%;
    height:auto;
    margin:auto;
    object-position:center 0%;
    `

const Error=()=>{
    const error = 'https://i.stack.imgur.com/01tZQ.png';
    return(
        <>
         <Box>
       <Typography mt={2} mb={2}>Response</Typography>
        <Box style={{display:"flex"}}>
            <Images src={error} alt="error" />
        </Box>
       </Box>
        </>
    )
}

export default Error;