import React from "react";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";

const theme = createTheme({
	palette: {
		primary: {
			main: "#6200EE",
		},
		secondary: {
			main: "#03DAC5",
		},
	},
});

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>Test</ThemeProvider>
		</div>
	);
}

export default App;
