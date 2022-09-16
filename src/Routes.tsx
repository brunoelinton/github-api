import NavBar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import GitSearch from './pages/GitSearch';


const Routes = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Redirect from="/gitsearch" to="/gitsearch/perfil" exact/>
      <Route path="/gitsearch" >
        <GitSearch />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
