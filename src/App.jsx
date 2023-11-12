import "./assets/App.css";
import GlobalProvider from "./context/GlobalContext";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<GlobalProvider>
				<BrowserRouter>
					<Navbar />
					<main>
						<Router></Router>
					</main>
					<Footer />
				</BrowserRouter>
			</GlobalProvider>
		</>
	);
}

export default App;
