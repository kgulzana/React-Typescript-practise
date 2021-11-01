import UserPage from './components/UserPage'
import TodosPage from "./components/TodosPage";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import UserItemPage from './components/UserItemPage'
import TodoItemPage from "./components/TodoItemPage";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <NavLink to="/users">Пользователь</NavLink>
          <NavLink to="/todos">Список дел</NavLink>
        </div>
        <Route path={"/users"} exact>
          <UserPage />
        </Route>
        <Route path={"/todos"} exact>
          <TodosPage />
        </Route>
        <Route path={"/users/:id"} exact>
          <UserItemPage />
        </Route>
        <Route path={"/todos/:id"} exact>
          <TodoItemPage />
        </Route>
      </div>
    </BrowserRouter>
  );
};

export default App;
