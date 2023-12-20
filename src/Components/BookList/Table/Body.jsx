import { Checkbox, IconButton, TableBody, TableRow } from "@mui/material";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { More } from "../../../Assets/Icons";
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

//eslint-disable-next-line
export default function Body({ product }) {
    //eslint-disable-next-line
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.body}`]: {
            color: "#212121",
            fontWeight: "500",
            border: "none",
            maxHeight:"60px"
        },
    }));
    return (
        <TableBody>
            {product.map((data) => (
                <TableRow key={data.id}>
                    <StyledTableCell align="center">
                        <Checkbox {...label} size="small"/>
                    </StyledTableCell>
                    <StyledTableCell align="center">"SKU"</StyledTableCell>
                    <StyledTableCell align="center">"Name"</StyledTableCell>
                    <StyledTableCell align="center">"Brand"</StyledTableCell>
                    <StyledTableCell align="center">"Category"</StyledTableCell>
                    <StyledTableCell align="center">{data.price}</StyledTableCell>
                    <StyledTableCell align="center">"Reorder Point"</StyledTableCell>
                    <StyledTableCell align="center">"Reorder Point"</StyledTableCell>

                    <StyledTableCell align="center">
                        <IconButton sx={{width:"40px", height:"40px"}}>
                            <More />
                        </IconButton>
                    </StyledTableCell>
                </TableRow>
            ))}
        </TableBody>
    );
}