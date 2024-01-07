import { CssBaseline, ThemeOptions, createTheme } from "@mui/material";
import { ReactNode, useMemo } from "react";
import ComponentsOverrides from "./overrides";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { useThemeContext } from "../hooks/useThemeContext";

type Props = {
	children: ReactNode;
};

export default function ThemeProvider({ children }: Props) {
	const { mode, dir } = useThemeContext();

	const themeOptions: ThemeOptions = useMemo(
		() => ({
			palette: { mode },
			direction: dir,
		}),
		[mode, dir]
	);

	const theme = createTheme(themeOptions);

	theme.components = ComponentsOverrides(theme);

	return (
		<MUIThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</MUIThemeProvider>
	);
}
