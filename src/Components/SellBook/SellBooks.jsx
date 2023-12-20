import { Box, IconButton, Modal, Typography } from "@mui/material";
import { Close } from "../../Assets/Icons";
//eslint-disable-next-line
export default function SellBooks({ open, handleClose }) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "calc(100% - 128px)",
        height: "calc(100% - 80px)",
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: "10px",
        overflow: "hidden"
    };
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Box sx={{
                    display: "flex",
                    height: "64px",
                    padding: "8px 24px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "40px",
                    alignSelf: "stretch",
                    background: "#FAF8FF"
                }}>
                    <Typography variant="body2">Sell Book</Typography>
                    <IconButton onClick={handleClose}>
                        <Close />
                    </IconButton>
                </Box>
            </Box>
        </Modal>
    )
}
