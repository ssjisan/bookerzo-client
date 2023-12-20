import { Box, Button, Toolbar, Typography } from "@mui/material";
import Sidebar from "../Layout/Sidebar/Sidebar";
import StateCard from "../Components/Dashboard/StateCard";
import { AddIcon } from "../Assets/Icons";
import BookListTable from "../Components/BookList/BookListTabel"
export default function BookList() {

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
                    padding: "20px 0px", display: "flex", justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        <Typography variant="h2">Book List</Typography>
                        <Typography variant="subtitle2" color="text.secondary">Home</Typography>
                    </Box>
                    <Button variant="outlined" startIcon={<AddIcon />} sx={{ width: "160px" }}>Add Book</Button>
                </Box>
                <StateCard />
                <BookListTable/>
            </Box>
        </Box>
    )
}
