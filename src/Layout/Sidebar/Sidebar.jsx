import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import { navConfig } from "../Navbar/NavConfig";
import { Button, ListItem, ListItemButton, Typography } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import { Sell } from "../../Assets/Icons";
import Logo from "../../Assets/Logo";
import SellBooks from "../../Components/SellBook/SellBooks";
const drawerWidth = 280;

function Sidebar(props) {
    // eslint-disable-next-line
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    // eslint-disable-next-line
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    // Sell Book Dialouge

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    }

    const linkStyle = {
        textDecoration: "none",
        fontWeight: 600,
        borderRadius: "4px",
    };
    const { pathname } = useLocation();
    console.log(pathname);

    const drawer = (
        <div>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "40px", p: "16px" }}>
            <Logo />
                <Button variant="contained" endIcon={<Sell />} sx={{boxShadow:"0px 8px 16px 0px rgba(118, 53, 220, 0.24)"}} onClick={handleClickOpen}>Sell Book</Button>
                <List>
                    {navConfig.map((item) => (
                            <Link to={item.link} style={linkStyle} key={item.id}>
                                <ListItem
                                    key={item.id}
                                    disablePadding
                                    sx={{
                                        background: pathname === item.link && "#F4EFFC",
                                        borderRadius: "4px",
                                        width: "100%",
                                        height: "44px",
                                        mb: "8px",
                                        display: "flex"
                                    }}
                                >
                                    <ListItemButton
                                        sx={{
                                            display: "flex",
                                            justifyContent: "flex-start",
                                            borderRadius: "4px",
                                            width: "100%",
                                            padding: "8px 16px",
                                            height: "44px",
                                            color: pathname === item.link ? "#7635DC" : "#918EAF",
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                minWidth: "40px"
                                            }}
                                        >
                                            {item.icon}
                                        </ListItemIcon>
                                        <Typography
                                            sx={{
                                                fontWeight: pathname === item.link ? 600 : 400,
                                                fontSize: "14px",
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                    ))}
                </List>
            </Box>
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Navbar handleDrawerToggle={handleDrawerToggle} />
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", lg: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", lg: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                            borderRightStyle: "dashed",
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
                <SellBooks handleClose={handleClose} open={open}/>
            </Box>
        </Box>
    );
}

export default Sidebar;