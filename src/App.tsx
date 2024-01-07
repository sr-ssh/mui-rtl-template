import { Button, Container, Paper, TextField } from "@mui/material";
import ThemeProvider from "./theme/theme";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { useThemeContext } from "./hooks/useThemeContext";

function App() {
	// Create rtl cache
	const cacheRtl = createCache({
		key: "muirtl",
		stylisPlugins: [prefixer, rtlPlugin],
	});

	const cacheLtl = createCache({
		key: "mui",
	});

	const { mode, toggleColorMode, dir, toggleDirection } = useThemeContext();

	return (
		<CacheProvider value={dir === "rtl" ? cacheRtl : cacheLtl}>
			<ThemeProvider>
				<Paper>
					<Container sx={{ marginBlockStart: "20px" }}>
						<TextField
							id="outlined-basic"
							label="Outlined"
							variant="outlined"
						/>
						<Button onClick={toggleDirection}>change lang</Button>
						<Button onClick={toggleColorMode}>change theme</Button>
					</Container>
				</Paper>
			</ThemeProvider>
		</CacheProvider>
	);
}

export default App;
