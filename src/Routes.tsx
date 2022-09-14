import Navbar from './components/Navbar';
import CepSearch from './pages/CepSearch';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/cepsearch">
        <CepSearch />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
