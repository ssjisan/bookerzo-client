import { Box, Table, TableContainer } from "@mui/material";
import { useState } from "react";
import productData from "../../Assets/data.json";
import Body from "./Table/Body";
import Header from "./Table/Header";
import Pagination from "./Table/Pagination";

export default function BookListTabel() {
    // eslint-disable-next-line
    const [product, setProduct] = useState(productData);
    return (
        <Box
            sx={{
                boxShadow:
                    "0px 0px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
                borderRadius: "16px",
                p: 2,
                mt: 3,
            }}
        >
            <TableContainer>
                <Table>
                    <Header />
                    <Body product={product} />
                </Table>
                <Pagination product={product} />
            </TableContainer>
        </Box>
    );
}