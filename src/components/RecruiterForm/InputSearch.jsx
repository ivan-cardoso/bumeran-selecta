import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { getAllRecruiters } from './recruiterTableData'
import styles from './index.module.css'
import FilteredArea from './FilteredAreas'
import FilteredSeniority from './FilteredSeniority'

function InputSearch({ setRecruiters, recruiters }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedArea, setSelectedArea] = useState('')
  const [selectedSeniority, setSelectedSenoirity] = useState('')
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
          if (!recruiters.length) setRecruiters('')
          else setRecruiters([...recruiters])
        })
        .catch((err) => console.log(err))
    }
  }

  const removeFilter = () => {
    setSelectedArea('')
    getAllRecruiters().then((data) => setRecruiters(data))
  }
  const removeSeniority = () => {
    setSelectedSenoirity('')
    getAllRecruiters().then((data) => setRecruiters(data))
  }

  return (
    <>
      <div className={styles.inputSearchContainer}>
        <div >
        <div >
        <form onChange={handleChange} onSubmit={handleSubmit}>
          <input
            className={styles.inputSearch}
            type='text'
            placeholder='Buscar por nombre...'
          />
        </form>

        <div >
        <FilteredArea
          setSelectedArea={setSelectedArea}
          setRecruiters={setRecruiters}
          recruiters={recruiters}
        />
        <FilteredSeniority
          setSelectedArea={setSelectedSenoirity}
          setRecruiters={setRecruiters}
          recruiters={recruiters}
        />
        </div>
          </div>
        </div>
      </div>

      <div>
      <div >
        <p >{selectedArea}</p>
        {selectedArea && (
          <button 
        
          onClick={() => removeFilter()}>remover filtro</button>
        )}
        <p >{selectedSeniority}</p>
        {selectedSeniority && (
          <button
           onClick={() => removeSeniority()}>remover filtro</button>
        )}
        </div>
      </div>
    </>
  )
}

export default InputSearch
