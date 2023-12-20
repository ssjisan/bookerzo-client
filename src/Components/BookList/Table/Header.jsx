import { TableHead, TableRow } from "@mui/material";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

export default function Header() {
//eslint-disable-next-line
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#F4F6F8",
      color: "#757575",
      fontWeight: "600",
      borderBottom: "none",
      border:"1px solid red"
    },
    "&:first-child": {
      borderRadius: "10px 0px 0px 10px",
    },
    "&:last-child": {
      borderRadius: "0px 10px 10px 0px",
    },
  }));
  return (
    <TableHead sx={{ borderRadius: "1em 0 0 1em" }}>
      <TableRow>
        <StyledTableCell align="center"></StyledTableCell>
        <StyledTableCell align="center">Code</StyledTableCell>
        <StyledTableCell align="center">Name</StyledTableCell>
        <StyledTableCell align="center">Writer</StyledTableCell>
        <StyledTableCell align="center">Publisher</StyledTableCell>
        <StyledTableCell align="center">Stock</StyledTableCell>
        <StyledTableCell align="center">Purchase</StyledTableCell>
        <StyledTableCell align="center">Sell Price</StyledTableCell>
        <StyledTableCell align="center"></StyledTableCell>
      </TableRow>
    </TableHead>
  );
}