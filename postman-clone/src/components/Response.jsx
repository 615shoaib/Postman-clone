
import {Box,Typography,TextareaAutosize} from '@mui/material'

// styled components
    const Textarea={
        width:"100%",
        padding:"10px",
        background: `url(http://i.imgur.com/2cOaJ.png)`,
        backgroundAttachment: 'local',
        backgroundRepeat: 'no-repeat',
        paddingLeft: 35,
        paddingTop: 10,
        borderColor: '#ccc'
    }

const Response=()=>{
    return(
        <>
       <Box>
       <Typography mt={2} nb={2}>Response</Typography>
        
        <TextareaAutosize 
        minRows={3}
        maxRows={5}
        style={Textarea}
        disabled
        />
       </Box>
        </>
    )
}

export default Response