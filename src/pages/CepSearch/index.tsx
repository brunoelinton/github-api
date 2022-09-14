import './styles.css'

import ResultCard from '../../components/ResultCard'
import { useState } from 'react'
import axios from 'axios'

type FormData = {
  perfil: string
}

type Perfil = {
  url: string;
  followers: string;
  location: string;
  name: string;
}

const GitSearch = () => {
  const [perfil, setPerfil] = useState<Perfil>()

  const [formData, setFormData] = useState<FormData>({
    perfil: '',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    axios
      .get(`https://api.github.com/users/${formData.perfil}`)
      .then((response) => {
        setPerfil(response.data)
        console.log(perfil)
      })
      .catch((error) => {
        setPerfil(undefined)
        console.log(error)
      })
  }

  return (
    <div className="cep-search-container">
      <h1 className="text-primary">Encontre um perfil Github</h1>
      <div className="container search-container">
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="perfil"
              className="search-input"
              placeholder="PREFIL (digite o perfil aqui...)"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Buscar
            </button>
          </div>
        </form>
        {perfil && (
          <>
            <ResultCard title="Perfil" description={perfil?.url} />
            <ResultCard title="Seguidores" description={perfil?.followers} />
            <ResultCard title="Localidade" description={perfil?.location} />
            <ResultCard title="Nome" description={perfil.name} />
          </>
        )}
      </div>
    </div>
  )
}

export default GitSearch
