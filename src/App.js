import logo from './logo.svg';
// import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <div className="white-version home-sticky spybody" data-spy="scroll" data-target=".navbar-example2" data-offset="150">
    {/* <h1>App File</h1> */}
    <Header />
    <Home />
    </div>
  );
}

export default App;
