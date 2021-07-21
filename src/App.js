import { Switch, Route } from 'react-router-dom';
import AppProvider from './context/AppProvider';
import Splash from './pages/SplashScreen';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Switch>
          <Route exact path="/" component={ Splash } />
          <Route exact path="/home" component={ Home } />
        </Switch>
      </AppProvider>
    </div>
  );
}

export default App;
