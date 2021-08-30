import React from "react";
import { Provider } from "./Context/Context";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Router } from "@reach/router";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import WelcomeWizard from "./Pages/WelcomeWizard/WelcomeWizard";
import Categories from "./Pages/Categories";
import Overview from "./Pages/Overview";
import Statistics from "./Pages/Statistics";

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
			<Provider>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Router>
						<SignIn path="/" />
						<SignUp path="/signup" />
						<WelcomeWizard path="/welcome" />
						<Overview path="/overview" />
						<Categories path="/categories" />
						<Statistics path="/statistics" />
					</Router>
				</ThemeProvider>
			</Provider>
		</div>
	);
}

export default App;
