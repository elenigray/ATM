import logo from './logo.svg';
import './App.css';
import {Account} from './views/account'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main className="container">
        <Account accountName="Checking" />
        <Account accountName="Savings" />
      </main>
    </div>
  );
}

export default App;
