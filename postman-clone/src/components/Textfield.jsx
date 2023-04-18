import {Box,Select,MenuItem,styled, TextField} from "@mui/material"
import { useState } from "react"

const Form=()=>{
    const Tabs=styled(Select)`
    width:100px;
    `
    const [age,setAge]=useState(0)


    const handleChange=()=>{
        setAge(1)
    }
    return(
        <>
        <Box>
           
        <Tabs
          value={age}
          label="METHOD"
          onChange={handleChange}
          variant="outlined"
        >
            
          <MenuItem value={10}>POST</MenuItem>
          <MenuItem value={20}>GET</MenuItem>
        </Tabs>
        <TextField type="input"  />
        </Box>
        </>
    )
}

export default Form