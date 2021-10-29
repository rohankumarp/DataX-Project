import "./App.css"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Staking from "./pages/Staking"
import Home from "./pages/Home"
import AddReward from "./pages/AddReward"
import Steps from "./pages/Steps"
import Graphs from "./pages/Graphs"
import GlobalSpinner from "./components/GlobalSpinner/GlobalSpinner"

function App() {
	return (
		<div className="App">
			<Navbar />
			<Switch>
				<Route path="/" component={Steps} exact />
				<Route path="/manage" component={Staking} />
				<Route path="/graphs" component={Graphs} />
			</Switch>
			<div style={{ position: "fixed", bottom: "70px", right: "100px" }}>
				<GlobalSpinner />
			</div>
		</div>
	)
}

export default App
