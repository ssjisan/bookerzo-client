import { Box, Button, Toolbar, Typography } from "@mui/material";
import Sidebar from "../Layout/Sidebar/Sidebar";
import { Upload } from "../Assets/Icons";
import AddBookForm from "../Components/AddBooks/AddBookForm";

export default function AddBooks() {
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
                    paddingBottom: "20px", display: "flex", justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        <Typography variant="h2">Add Book</Typography>
                        <Typography variant="subtitle2" color="text.secondary">Home</Typography>
                    </Box>
                    <Button variant="ghost" startIcon={<Upload />}>Upload Excel</Button>
                </Box>
                <AddBookForm />
            </Box>
        </Box>
    )
}
