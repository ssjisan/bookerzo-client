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
            html: {
                margin: 0,
                padding: 0,
                width: '100%',
                height: '100%',
                WebkitOverflowScrolling: 'touch',
            },
            body: {
                margin: 0,
                padding: 0,
                width: '100%',
                height: '100%',
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
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    color: theme.palette.grey[900],
                    borderRadius: "8px",
                    borderColor: theme.palette.grey[500],
                },
            },
        },
    };
}