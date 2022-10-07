import './App.css';
import Header from './components/Header/Header';
import { Redirect, Switch, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>

        <Route path="/auth/:type">
          <Auth />
        </Route>

        <Route path="/todos" >
          <TodoList />
        </Route>

        <Route path="/" >
          <Redirect to="/todos" />
        </Route>

        <Route path="*">
          <Redirect to="/"/>
        </Route>

      </Switch>
    </div>
 
  );
}

export default App;
