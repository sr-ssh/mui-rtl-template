import { Theme } from "@mui/material";

export const TextField = (theme: Theme) => {
  return {
    MuiTextField: {
      styleOverrides: {
        root: {
          ".MuiOutlinedInput-notchedOutline": {
            backgroundColor: "pink",
            border: "1px solid blue",
            borderRadius: 8,
          },
        }
      }
    }
  }
}