import { Box, Typography, Table, TableHead, TableCell, TableRow, TableBody, styled } from "@mui/material";
import AddRows from "./addrows";

// styled componets
        const Tablestyled = styled(TableCell)`
        border:1px solid rgba(224,224,224,1);
        border-collapse: collapse;
        padding:7px 5px  !important;
        `
const CreateTable = ({ text }) => {
    return (
        <>
            <Box>
                <Typography mt={2} nb={2}>{text}</Typography>
                <Table sx={{ minWidth: "100%", border: "1px solid rgba(224,224,224,1)" }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <Tablestyled></Tablestyled>
                            <Tablestyled>Key</Tablestyled>
                            <Tablestyled>Value</Tablestyled>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <AddRows />
                    </TableBody>
                </Table>
            </Box>
        </>
    )
}

export default CreateTable;