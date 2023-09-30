import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "4px",
  padding: ".65rem 3rem",
  letterSpacing: "2px",
  fontWeight: 700
}))