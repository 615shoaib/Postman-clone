import { Box, styled } from "@mui/material"

// Components
import Header from "./Header"
import Form from "./Textfield"
import SelectTabs from "./SelectTabs"

  const Components = styled(Box)`
    width:60%;
    margin:20px auto 0 auto;

`


const Home=()=>{
  
    return(
        <>
        <Header />
        <Components>
        <Form />
        <SelectTabs />
        </Components>
        </>
    )
}

export default Home