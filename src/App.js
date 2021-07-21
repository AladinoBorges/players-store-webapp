import AppProvider from './context/AppProvider';
import Splash from './pages/SplashScreen';
import './App.css';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Splash />
      </div>
    </AppProvider>
  );
}

export default App;
