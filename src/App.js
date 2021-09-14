import React from "react";
import { Provider } from "./Context/Context";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Router } from "@reach/router";
import SignInUp from "./Pages/SignInUp/SignInUp";
import WelcomeWizard from "./Pages/WelcomeWizard/WelcomeWizard";
import Categories from "./Pages/MainPages/Categories";
import MainPages from "./Pages/MainPages/MainPages";
import Statistics from "./Pages/MainPages/Statistics";

const theme = createTheme({
	palette: {
		primary: {
			main: "#6200EE",
		},
		secondary: {
			main: "#03DAC5",
		},
	},
	overrides: {
		MuiBottomNavigationAction: {
			root: {
				"&$selected": {
					color: "#03DAC5",
				},
			},
		},
		MuiBackdrop: {
			root: {
				backgroundColor: "rgba(255, 255, 255, 0.85);",
			},
		},
	},
});

function App() {
	return (
		<div className="App">
			<Provider>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Router>
						<SignInUp whichPage="signIn" path="/" />
						<SignInUp whichPage="signUp" path="/signup" />
						<WelcomeWizard path="/welcome" />
						<MainPages path="/main" />
						<Categories path="/categories" />
						<Statistics path="/statistics" />
					</Router>
				</ThemeProvider>
			</Provider>
		</div>
	);
}

export default App;
