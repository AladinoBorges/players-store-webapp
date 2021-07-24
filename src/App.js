import { Switch, Route } from 'react-router-dom';
import AppProvider from './context/AppProvider';
import Details from './pages/Details';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/game/:id" component={ Details } />
        </Switch>
      </AppProvider>
    </div>
  );
}

export default App;
