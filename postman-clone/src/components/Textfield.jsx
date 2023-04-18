import { Box, Select, MenuItem, styled, TextField, Button } from "@mui/material"
import { useState } from "react"

const Form = () => {
  const Container = styled(Box)`
    display:flex;
    justify-content: space-between;
    align-items: center;
  `
  const Tabs = styled(Select)`
    width:150px;
    height:40px;
    `
  const Input = styled(TextField)`
    width:100%;
    background:#f6f6f6;
    `
    const Btn=styled(Button)`
    width:100px;
    height:40px;
    margin-left:5px !important;
    `
   
  // const [age, setAge] = useState(0)


  // const handleChange = () => {
  //   setAge(1)
  // }
  return (
    <>
      <Container>

        <Tabs
          // value={age}
          label="POST"
          // onChange={handleChange}
        // variant="standard"
        >

          <MenuItem value={'POST'}>POST</MenuItem>
          <MenuItem value={'GET'}>GET</MenuItem>
        </Tabs>
        <Input type="input" size="small" />
        <Btn variant="contained" disableRipple>Send</Btn>
      </Container>
    </>
  )
}

export default Form