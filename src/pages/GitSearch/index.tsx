import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar'

import './styles.css'
import { useState } from 'react'
import Perfil from '../../types/Perfil'
import Repository from '../../types/Repository'
import NameRepo_Url_Lang from '../../types/Repository'

type FormData = {
  perfil: string
}

const GitSearch = () => {
  const [perfil, setPerfil] = useState<Perfil>();
  const [respositorio, setRepositorio] = useState<NameRepo_Url_Lang>();

  const [formData, setFormData] = useState<FormData>({
    perfil: '',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const perfilFormName = event.target.name
    const perfilFormValue = event.target.value

    setFormData({ ...formData, [perfilFormName]: perfilFormValue })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    axios
      .get(`https://api.github.com/users/${formData.perfil}`)
      .then((response) => {
        setPerfil(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        setPerfil(undefined)
        console.log(error)
      })

      axios
      .get(`https://api.github.com/users/${formData.perfil}/repos`)
      .then((response) => {
        setRepositorio(response.data)       
        console.log(response.data)
      })
      .catch((error) => {
        setPerfil(undefined)
        console.log(error)
      })
  }

  return (
    <div className="git-search-container">
      <div className="input-search">
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-search">
            <input
              type="text"
              name="perfil"
              className="perfil-input-serch"
              placeholder="PERFIL (digite o perfil aqui...)"
              onChange={handleChange}
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
        <div id="line"></div>
        {perfil && (
          <>
            <div className="git-search-content-picture">
              <div id="photo">
                <div id="photo-profile">
                  <img src={perfil.avatar_url} alt={perfil.name} />
                </div>
              </div>
              <div id="text">
                <h1>{perfil.name}</h1>
                <p>{perfil.login}</p>
              </div>
              <div id="network">
                <div id="followers-follwing">
                  <svg
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"
                    ></path>
                  </svg>
                  <span className="numbers">{perfil.followers} </span>
                  <span>followers </span>
                  <span className="numbers">. {perfil.following}</span> <span>following</span>
                </div>
              </div>
            </div>
            <div className="git-search-content-nav-data">
              <Navbar />
              <div className="git-search-content-profile">
                <Switch>
                  <Route path="/gitsearch/perfil">
                    <div className="git-search-content-profile-container">
                      <p>{perfil.login} / README.md</p>
                      <h4>Olá, eu sou o (a) {perfil.name}👋</h4>
                      <ul>
                        <li><span>😊</span> Perfil: {perfil.html_url}</li>
                        <li><span>🗺️</span> Localidade: {perfil.location}</li>
                        <li><span>🔗</span> API Url: {perfil.url}</li>      
                        <li><span>📖</span> Bio: {perfil.bio}</li>
                      </ul>
                    </div>
                  </Route>
                  <Route path="/gitsearch/repositorios">
                    <h1>Repositórios</h1>
                  </Route>
                </Switch>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default GitSearch
