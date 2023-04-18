
import { Box, Tabs, Tab, styled } from "@mui/material";
import { useState } from 'react'


const SelectTabs = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const Components=styled(Box)`
  margin-top:20px;
  `
  const Paragraph=styled(Tab)`
  text-transform: none !important;
  `
  return (
    <>
      <Components>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="none"
          TabIndicatorProps={{sx:{background:"#f2683A",height:4,bottom:2}}}
        >
          <Paragraph  label="Param" />
          <Paragraph  label="Header" />
          <Paragraph  label="Body" />
        </Tabs>


        <Box
          role="tabpanel"
          hidden={value !== 0}
          id={`simple-tabpanel-${0}`}
          aria-labelledby={`simple-tab-${0}`}
        >
          Params 
        </Box>

        <Box
          role="tabpanel"
          hidden={value !== 1}
          id={`simple-tabpanel-${1}`}
          aria-labelledby={`simple-tab-${1}`}
        >
          Headers
        </Box>


        <Box
          role="tabpanel"
          hidden={value !== 2}
          id={`simple-tabpanel-${2}`}
          aria-labelledby={`simple-tab-${2}`}
        >
         Body
        </Box>

      </Components>
    </>
  )
}

export default SelectTabs;