import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export function overrides(theme) {
    return {
        MuiCssBaseline: {
            styleOverrides: {
                '*': {
                    boxSizing: 'border-box',
                }
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    "&:hover": {
                        boxShadow: "none",
                    },
                },
                containedPrimary: {
                    backgroundColor: theme.palette.primary,
                    color: "white",
                    borderRadius: "8px",
                    boxShadow: "none",
                    height: "40px",
                    "&:hover": {
                        boxShadow: "none",
                        backgroundColor: theme.palette.primary.dark,
                    },
                },
                ghostPrimary: {
                    backgroundColor: theme.palette.primary.light,
                    color: theme.palette.primary.main,
                    border: "1px dashed",
                    height: "40px",
                    boxShadow: "none",
                    "&:hover": {
                        boxShadow: "none",
                        backgroundColor: alpha(theme.palette.primary.main, 0.16),
                    },
                },
                outlinedPrimary: {
                    color: theme.palette.primary.main,
                    border: "1px solid theme.palette.primary.main",
                    height: "40px",
                    boxShadow: "none",
                    "&:hover": {
                        boxShadow: "none",
                        backgroundColor: theme.palette.primary.light,
                    },
                },
            },
        },
        // MuiOutlinedInput: {
        //     styleOverrides: {
        //         root: {
        //             fontSize: "16px",
        //             color: theme.palette.grey[500],
        //             fontWeight: 500,
        //             // height:"48px",
        //             borderColor: theme.palette.grey[500],
        //             "&:hover": {
        //                 borderColor: "#fff",
        //             },
        //             "&.Mui-focused": {
        //                 backgroundColor: "#fff",
        //                 color: theme.palette.grey[900],
        //             },
        //         },
        //     },
        // }
    };
}