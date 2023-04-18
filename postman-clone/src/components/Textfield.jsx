import { useContext } from "react"

import { Box, Select, MenuItem, styled, TextField, Button } from "@mui/material"


// components
import { Datacontext } from "../Context/Dataprovider"

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


 
  const {form,setForm}= useContext(Datacontext);
    const handleChange = (e) => {
      setForm({ ...form, type: e.target.value})
      // console.log(form)
      }

      const OurUrlChange = (e) => {
        setForm({ ...form, url: e.target.value})
        console.log(form)
        }
 
  return (
    <>
      <Container>

        <Tabs
          value={form.type}
          label="POST"
          onChange={(e)=>handleChange(e)}
        // variant="standard"
        >

          <MenuItem value={'POST'}>POST</MenuItem>
          <MenuItem value={'GET'}>GET</MenuItem>
        </Tabs>
        <Input type="input" size="small" onClick={(e)=>OurUrlChange(e)} />
        <Btn variant="contained" disableRipple>Send</Btn>
      </Container>
    </>
  )
}

export default Form