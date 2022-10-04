import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { Switch, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/auth/:type">
          <Auth />
        </Route>
        <Route path="/todo">
          <TodoList />
        </Route>
      </Switch>
    </div>
 
  );
}

export default App;
