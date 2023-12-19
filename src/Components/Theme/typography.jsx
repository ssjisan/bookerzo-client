// ----------------------------------------------------------------------

// export function remToPx(value) {
//     return Math.round(parseFloat(value) * 16);
//   }
  
//   export function pxToRem(value) {
//     return `${value / 16}rem`;
//   }
  
//   export function responsiveFontSizes({ sm, md, lg }) {
//     return {
//       '@media (min-width:600px)': {
//         fontSize: pxToRem(sm),
//       },
//       '@media (min-width:900px)': {
//         fontSize: pxToRem(md),
//       },
//       '@media (min-width:1200px)': {
//         fontSize: pxToRem(lg),
//       },
//     };
//   }

  
  // ----------------------------------------------------------------------
  
  export const typography = {
    h1: {
      fontWeight: 700,
      lineHeight: "150%",
      fontSize: "32px",
    //   ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
    },
    h2: {
      fontWeight: 700,
      lineHeight: "140%",
      fontSize: "24px",
    //   ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
    },
    h3: {
      fontWeight: 700,
      lineHeight: "140%",
      fontSize: "20px",
    //   ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
    },
    subtitle1: {
      fontWeight: 400,
      lineHeight: "140%",
      fontSize: "16px",
    },
    subtitle2: {
      fontWeight: 400,
      lineHeight: "140%",
      fontSize: "14px",
    },
    body1: {
        fontWeight: 700,
        lineHeight: "140%",
        fontSize: "16px",
    },
    body2: {
        fontWeight: 700,
        lineHeight: "140%",
        fontSize: "14px",
    },
    button: {
      fontWeight: 600,
      lineHeight: "22px",
      fontSize: "14px",
      textTransform: 'unset',
    },
  };