import { Box, Typography } from '@mui/material'
import ReactApexChart from 'react-apexcharts'
const state = {
    series: [65],
    options: {
        colors: ["#15B112"],
        plotOptions: {
            radialBar: {
                startAngle: 0,
                endAngle: 360,
                hollow: {
                    margin: 2,
                    size: "65%",
                },
                track: {
                    show: true,
                    startAngle: undefined,
                    endAngle: undefined,
                    background: "#D7D9DB",
                    strokeWidth: "75%",
                    opacity: 1,
                    margin: 5,
                },
                dataLabels: {
                    show: true,
                    name: {
                        show: false,
                        fontSize: "22px",
                        fontFamily: undefined,
                        color: undefined,
                        offsetY: -10,
                    },
                    value: {
                        show: true,
                        fontSize: "32px",
                        fontWeight:700,
                        fontFamily: undefined,
                        color: undefined,
                        offsetY: 16,
                        formatter: function (val) {
                            return val + "%";
                        },
                    },
                },
            },
        },
        stroke: {
            lineCap: "round",
        },
    },
};
export default function RadialChart() {
    return (
        <Box sx={{ boxShadow: "0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.20)", borderRadius: "6px" }}>
            <Box sx={{ padding: "24px" }}>
                <Typography
                    variant='h3'
                    color="text.900"
                >
                    Best Selling Category
                </Typography>
            </Box>
            <ReactApexChart
                options={state.options}
                series={state.series}
                type="radialBar"
                width={420}
            />
            <Box sx={{ padding: "16px", display: "flex", justifyContent: "center", alignItems: "center", borderTop: "1px solid var(--Components-Divider, rgba(145, 158, 171, 0.24))" }}>
                <Box sx={{ display: "flex", gap: "16px", alignItems: "center" }}>
                    <Box sx={{ width: "24px", height: "12px", borderRadius: "2px", background: "#15B112" }}></Box>
                    <Typography variant='subtitle2'>Bill Quantity</Typography>
                </Box>
            </Box>
        </Box>
    )
}
