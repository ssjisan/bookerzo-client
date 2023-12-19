import { Box, Grid, TextField, Typography } from "@mui/material";
import Logo from "../Assets/Logo";

export default function Login() {
    return (
        <Box>
            <Box sx={{ p: "24px" }}>
                <Logo />
            </Box>
            <Grid container>
                <Grid lg={9} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img src="/src/Assets/login_bg.png" />
                </Grid>
                <Grid lg={3}>
                    <Box sx={{ paddingTop: "64px", paddingLeft: "24px", paddingRight: "24px" }}>
                        <Box sx={{ paddingTop: "80px", paddingBottom: "40px" }}>
                            <Typography color="text.primary" variant="h2">Sign in to Portal</Typography>
                        </Box>
                        <Box sx={{ padding: "24px 0px" }}>
                            <Box sx={{ p: "16px", backgroundColor: "primary.light" }}>
                                <Typography variant="subtitle2">Use email : <span style={{ fontWeight: 600 }}>bookerzo@info.com</span> / password : <span style={{ fontWeight: 600 }}>bkrzo1234</span></Typography>
                            </Box>
                        </Box>
                        <Box>
                            
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
