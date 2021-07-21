import AppProvider from './context/AppProvider';
import './App.css';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <header className="App-header">
          HELLO
        </header>
      </div>
    </AppProvider>
  );
}

export default App;
