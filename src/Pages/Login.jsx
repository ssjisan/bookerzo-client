import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography } from "@mui/material";
import Logo from "../Assets/Logo";
import { useState } from "react";
import { EyeOff, EyeOn } from "../Assets/Icons";
// import { DownArrow } from "../Assets/Icons";
export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
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
                    <Box sx={{ paddingTop: "48px", paddingLeft: "24px", paddingRight: "24px" }}>
                        <Box sx={{ paddingTop: "80px", paddingBottom: "40px" }}>
                            <Typography color="text.primary" variant="h2">Sign in to Portal</Typography>
                        </Box>
                        <Box sx={{ padding: "24px 0px" }}>
                            <Box sx={{ p: "16px", backgroundColor: "primary.light" }}>
                                <Typography variant="subtitle2">Use email : <span style={{ fontWeight: 600 }}>bookerzo@info.com</span> / password : <span style={{ fontWeight: 600 }}>bkrzo1234</span></Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                            <TextField label="Email" variant="outlined" sx={{ mb: 2 }} name="Email" fullWidth />
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <EyeOn /> : <EyeOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                            </FormGroup>
                            <Box><Typography variant="subtitle1" sx={{ textAlign: "right" }}>Forget password?</Typography></Box>
                            <Button variant="contained">Login</Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
