import './App.css';
import { UserProvider } from './context/UserContext';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <BrowserRouter>
          <Header>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </Header>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;
