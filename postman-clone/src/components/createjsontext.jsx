import { TextareaAutosize, Typography } from "@mui/material";



const CreateJsonText=()=>{
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
    return(
        <>
        <Typography mt={2} mb={2}>Json</Typography>
        
        <TextareaAutosize 
        minRows={3}
        maxRows={5}
        style={Textarea}
        />

        </>
    )
}

export default CreateJsonText;