import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Son Do Van';
  const age = 28;
  const isFemale = true;
  const student = {
    name: 'Easy student'
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Đỗ Văn Sơn
        </p>
        
      </header>
    </div>
  );
}

export default App;
