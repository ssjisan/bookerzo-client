import { Box, Toolbar, Typography } from "@mui/material";
import Sidebar from "../Layout/Sidebar/Sidebar";
import BookListTable from "../Components/BookList/BookListTabel"
export default function Invoice() {

    const drawerWidth = 280;
    return (
        <Box>
            <Sidebar />
            <Box
                component="main"
                sx={{
                    p: 3,
                    width: { lg: `calc(100% - ${drawerWidth}px)` },
                    ml: { lg: `${drawerWidth}px` },
                }}
            >
                <Toolbar />
                <Box sx={{
                    paddingBottom: "20px", display: "flex", justifyContent: "flex-start",
                    alignItems: "center"
                }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        <Typography variant="h2">Invoice</Typography>
                        <Typography variant="subtitle2" color="text.secondary">Home</Typography>
                    </Box>
                </Box>
                <BookListTable />
            </Box>
        </Box>
    )
}
