import {Box,Typography} from '@mui/material'

const Error=()=>{
    const error = 'https://i.stack.imgur.com/01tZQ.png';
    return(
        <>
         <Box>
       <Typography mt={2} mb={2}>Response</Typography>
        <Box>
            <img src={error} alt="error" />
        </Box>
       </Box>
        </>
    )
}

export default Error;