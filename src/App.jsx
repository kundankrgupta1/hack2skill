import About from "./Components/About"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import "./App.css";
import Company from "./Components/Company";
import CompanyTwo from "./Components/CompanyTwo";
// import Testmonials from "./Components/Testmonials";
import Accordion from "./Components/Accordion";
import Footer from "./Components/Footer";

const App = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<About />
			<Company />
			<CompanyTwo />
			<Accordion />
			<Footer />
		</div>
	)
}

export default App