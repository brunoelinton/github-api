import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar'

import './styles.css'

const GitSearch = () => {
  return (
    <div className="git-search-container">
      <div className="input-search">
        <form action="" className="form-container">
          <div className="form-search">
            <input
              type="text"
              name="perfil"
              className="perfil-input-serch"
              placeholder="PERFIL (digite o perfil aqui...)"
              onChange={() => {}}
            />
            <button
              type="submit"
              className="perfil-button-search"
              value="BUSCAR"
            >
              Buscar
            </button>
          </div>
        </form>
      </div>
      <div className="git-search-content">
        <div className="git-search-content-picture"></div>
        <div className="git-search-content-nav-data">
          <Navbar />
          <div className="git-search-content-profile">
            <Switch>
            <Route path="/gitsearch/perfil">
                    <h1>Perfil</h1>
                </Route>
                <Route path="/gitsearch/repositorios">
                    <h1>Repositórios</h1>
                </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GitSearch
