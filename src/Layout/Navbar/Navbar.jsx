import {
    AppBar,
    Box,
    IconButton,
    Toolbar,
    useMediaQuery,
} from "@mui/material";
import AccountPopOver from "./AccountPopOver";

const drawerWidth = 280;
// eslint-disable-next-line
export default function Navbar({ handleDrawerToggle }) {
    // eslint-disable-next-line
    const forBelow1100 = useMediaQuery('(min-width:1100px)');

    return (
        <AppBar
            position="fixed"
            sx={{
                width: { lg: `calc(100% - ${drawerWidth}px)` },
                ml: { lg: `${drawerWidth}px` },
            }}
            style={{
                backgroundColor: "rgba(255, 255, 255, 1)",
                boxShadow: "none",
                borderBottom: "1px dashed #E0E0E0"
            }}
        >
            <Toolbar>
                <IconButton
                    color="default"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { lg: "none" } }}
                >
                    A
                </IconButton>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <AccountPopOver />
                </Box>
            </Toolbar>
        </AppBar>
    );
}