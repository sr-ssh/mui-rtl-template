import { Theme } from "@mui/material"
import { TextField } from "./TextField"

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(TextField(theme))
}