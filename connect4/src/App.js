import Footer from './components/Footer';
import Gameboard from './components/Gameboard';
import Header from './components/Header'

function App() {

	let board = [['-', '-', '-', '-', '-', '-', '-'],
			['-', '-', '-', '-', '-', '-', '-'],
			['-', '-', '-', '-', '-', '-', '-'],
			['-', '-', '-', '-', '-', '-', '-'],
			['-', '-', '-', '-', '-', '-', '-'],
			['-', '-', '-', '-', '-', '-', '-'],]

	return (
		<div className="container">
			<Header />
			<Gameboard board={board}/>
			<Footer />
		</div>
	);
}

export default App;
