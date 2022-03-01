import Footer from './components/Footer';
import Gameboard from './components/Gameboard';
import Header from './components/Header'
import BigGrid from './components/BigGrid';

function App(board) {
  return (
    <div className="container">
      {console.log(board)}
      <Header/>
      <Gameboard/>
      <BigGrid/>
      <Footer/>
    </div>
  );
}

export default App;
