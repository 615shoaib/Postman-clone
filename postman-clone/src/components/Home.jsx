import { Box, styled } from "@mui/material"

// Components
import Header from "./Header"
import Form from "./Textfield"
import SelectTabs from "./SelectTabs"
import Response from "./Response"
import Error  from './Error'

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
        {/* <Response /> */}
        <Error />
        </Components>
        </>
    )
}

export default Home