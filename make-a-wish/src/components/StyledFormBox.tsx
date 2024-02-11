import { styled } from "@mui/material/styles"
import { Box } from "@mui/material"

export const StyledFormBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(2),
  backgroundColor: "white",
  borderRadius: "8px",
  boxShadow: theme.shadows[3],
}))
