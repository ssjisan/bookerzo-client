import { alpha } from '@mui/material/styles';

export const grey = {
    100: '#F3F3F3',
    500: '#918EAF',
    900: '#060415',
};

export const primary = {
    light: '#F4EFFC',
    main: '#7635DC',
    dark: '#4D0DB1',
};
export const success = {
    light: '#D7E1DD',
    main: '#36B37E',
    dark: '#168254',
};
export const error = {
    light: '#E7D5D3',
    main: '#FF1F00',
    dark: '#DF1B00',
};


const base = {
    primary,
    grey,
    success,
    error
};


// ------------------------------------------------------------

export function palette() {
    return {
        ...base,
        text: {
            primary: grey[900],
            secondary: grey[500],
            disabled: alpha(grey[900], 0.24)
        },
    };
}