import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { getAllRecruiters } from './recruiterTableData'

function InputSearch({ setRecruiters }) {
  const [searchTerm, setSearchTerm] = useState('')
  const handleChange = (e) => {
    const { value } = e.target
    setSearchTerm(value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!searchTerm) {
      getAllRecruiters().then((recruiters) => setRecruiters(recruiters))
    } else {
      axios
        .get(`/api/recruiters/search/${searchTerm}`)
        .then((res) => res.data)
        .then((recruiters) => {
          if (!recruiters.length)
            setRecruiters({ nombre: 'No hay resultados...' })
          else setRecruiters([...recruiters])
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <div>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <input type='text' placeholder='Buscar por nombre...' />
      </form>
    </div>
  )
}

export default InputSearch
