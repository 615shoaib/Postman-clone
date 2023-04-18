
import {TableRow,TableCell,styled,Checkbox, TextField} from '@mui/material'

// styled componets

    const Tablestyled = styled(TableCell)`
    border:1px solid rgba(224,224,224,1);
    border-collapse: collapse;
    padding:7px 5px  !important;
    `
    const Checked=styled(Checkbox)`
    padding:2px 5px !important
    `
    const Input=styled(TextField)`
    width:100%
    `

const AddRows = () => {
    return (
        <>
            <TableRow>

                <Tablestyled >
                <Checked size="large" disableRipple />
                </Tablestyled>
                <Tablestyled >
                    <Input inputProps={{style:{height:30,padding:'0 5px',}}} />
                </Tablestyled>
                <Tablestyled >
                <Input inputProps={{style:{height:30,padding:'0 5px',}}} />
                </Tablestyled>
            </TableRow>
        </>
    )
}

export default AddRows;