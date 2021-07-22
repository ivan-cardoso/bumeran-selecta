import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { getAllRecruiters } from './recruiterTableData'
import styles from './index.module.css'
import FilteredArea from './FilteredAreas'
import FilteredSeniority from './FilteredSeniority'
import { TiDelete } from 'react-icons/ti'

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
    let filtered, filtered2

    if (!searchTerm) {
      getAllRecruiters().then((recruiters) => {
        setRecruiters(recruiters)
        setSelectedSenoirity('')
        setSelectedArea('')
      })
    } else {
      axios
        .get(`/api/recruiters/search/${searchTerm}`)
        .then((res) => res.data)
        .then((recruiters) => {
          if (!recruiters.length) return setRecruiters([])
          if (selectedSeniority) {
            filtered = recruiters.filter(
              (recruits) => recruits.seniority1 === selectedSeniority
            )
            setRecruiters(filtered)
          }
          if (selectedArea) {
            filtered2 = filtered.filter(
              (recruits) => recruits.favoriteArea1 === selectedArea
            )
            setRecruiters(filtered2)
          } else setRecruiters([...recruiters])
        })
        .catch((err) => console.log(err))
    }
  }

  const removeFilter = () => {
    setSelectedArea('')
    getAllRecruiters().then((data) => {
      if (selectedSeniority) {
        const filtered = data.filter(
          (recruiters) => recruiters.seniority1 === selectedSeniority
        )
        setRecruiters(filtered)
      } else {
        setRecruiters(data)
      }
    })
  }
  const removeSeniority = () => {
    setSelectedSenoirity('')
    getAllRecruiters().then((data) => {
      if (selectedArea) {
        const filtered = data.filter(
          (recruiters) => recruiters.favoriteArea1 === selectedArea
        )
        setRecruiters(filtered)
      } else {
        setRecruiters(data)
      }
    })
  }

  return (

    
    <>
      <div className={styles.inputSearchContainer}>
        <div >
        <div >
        <form onChange={handleChange} onSubmit={handleSubmit}>
          <input
            style={{ height: 55, border: '1px solid grey' }}
            className={styles.inputSearch}
            type='text'
            placeholder='Buscar por nombre...'
          />
        </form>

        <div >
        <FilteredArea
          setSelectedArea={setSelectedArea}
          selectedSeniority={selectedSeniority}
          setRecruiters={setRecruiters}
          recruiters={recruiters}
          selectedArea={selectedArea}
        />
        <FilteredSeniority
          selectedArea={selectedArea}
          setSelectedSenoirity={setSelectedSenoirity}
          setRecruiters={setRecruiters}
          recruiters={recruiters}
          selectedSeniority={selectedSeniority}
        />
        </div>
          </div>
        </div>
      </div>
      <div className={styles.filterContainer}>
        <p onClick={() => removeFilter()} className={styles.selectedFilter}>
          {selectedArea}
        </p>
        {selectedArea && (
          <TiDelete className={styles.removeBtn}>remover filtro</TiDelete>
        )}
        <p className={styles.selectedFilter} onClick={() => removeSeniority()}>
          {selectedSeniority}
        </p>
        {selectedSeniority && (
          <TiDelete className={styles.removeBtn}></TiDelete>
        )}
        </div>
    </>
  )
}

export default InputSearch
