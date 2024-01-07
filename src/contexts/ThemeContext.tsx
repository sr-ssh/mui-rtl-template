import { PaletteMode } from "@mui/material";
import { ReactNode, createContext, useState } from "react";

type ThemeContextType = {
	toggleColorMode: () => void;
	toggleDirection: () => void;
	mode: PaletteMode;
	dir: DirType;
};

export type DirType = "rtl" | "ltr";

export const ThemeContext = createContext<ThemeContextType>({
	toggleColorMode: () => {},
	toggleDirection: () => {},
	mode: "light",
	dir: "rtl",
});

export default function ThemeContextProvider({
	children,
}: {
	children: ReactNode;
}) {
	const [mode, setMode] = useState<PaletteMode>("light");
	const [dir, setDir] = useState<DirType>("rtl");

	const toggleColorMode = () => {
		setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
	};

	const toggleDirection = () => {
		const newDir = dir === "rtl" ? "ltr" : "rtl";
		document.getElementsByTagName("html")[0].dir = newDir;
		setDir((prevDir) => (prevDir === "rtl" ? "ltr" : "rtl"));
	};

	return (
		<ThemeContext.Provider
			value={{ toggleColorMode, mode, toggleDirection, dir }}
		>
			{children}
		</ThemeContext.Provider>
	);
}
