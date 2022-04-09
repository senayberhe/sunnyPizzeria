import logo from './logo.svg';
import './App.css';
import PizzaList from './pizzerias/pizzeriaslist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg" className="App-logo" alt="logo" />
        <p>
          Web App for Pizza Lovers
        </p>
        <h1>
          Pizza vs Pizza
        </h1>
        <PizzaList />
      </header>
    </div>
  );
}

export default App;
