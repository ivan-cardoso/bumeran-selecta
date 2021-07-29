import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FilteredArea from '../../containers/Filtros/FilteredArea'
import { getAllJobs, getJobsSearch } from '../../store/jobs/jobs'
import styles from '../RecruiterForm/index.module.css'
import { TiDelete } from 'react-icons/ti'

export default function InputSearch() {
  const dispatch = useDispatch()
  const { areas } = useSelector((state) => state.aditionalData)
  const { seniorities } = useSelector((state) => state.aditionalData)

  const [values, setValues] = useState({
    search: '',
    area: '',
    seniority: '',
    isOpen: null,
  })
  const [selectedArea, setSelectedArea] = useState('')
  const [isOpen, setIsOpen] = useState('')
  const [selectedSeniority, setSelectedSeniority] = useState('')

  const handleInputChange = async (e) => {
    const { value, name } = e.target
    //visualizaciones de filtros
    if (name === 'area') setSelectedArea(value)
    if (name === 'isOpen') setIsOpen(value)
    if (name === 'seniority') setSelectedSeniority(value)

    await setValues({ ...values, [name]: value })
    const inputValues = { ...values, [name]: value }
    await dispatch(getJobsSearch(inputValues))
  }

  const clearFilter = (stateChanged, name) => {
    stateChanged('')
    setValues({ ...values, [name]: '' })
    const inputValues = { ...values, [name]: '' }
    dispatch(getJobsSearch(inputValues))
  }

  return (
    <>
      <div className={styles.all}>
        <div className={styles.inputSearchContainer}>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              onChange={(e) => handleInputChange(e)}
              className={styles.inputSearch}
              type='text'
              name='search'
              placeholder='Buscar por nombre...'
            />
          </form>

          <FilteredArea
            selectedValue={selectedArea}
            name='area'
            title='Area Favorita'
            values={areas}
            setValues={setValues}
            handleAreaChange={handleInputChange}
          />
          <FilteredArea
            selectedValue={isOpen}
            name='isOpen'
            title='Estado'
            values={[
              { name: 'abierta' },
              { name: 'cerrada' },
              { name: 'asignada' },
            ]}
            setValues={setValues}
            handleAreaChange={handleInputChange}
          />
          <FilteredArea
            selectedValue={selectedSeniority}
            name='seniority'
            title='Seniority'
            values={seniorities}
            setValues={setValues}
            handleAreaChange={handleInputChange}
          />
        </div>
        <div >
          {selectedArea && (
            <p
              className={styles.filterOption}
              onClick={() => clearFilter(setSelectedArea, 'area')}
            >
              {selectedArea} <TiDelete className={styles.deleteicon} />
            </p>
          )}
          {isOpen && (
            <p
              className={styles.filterOption}
              onClick={() => clearFilter(setIsOpen, 'isOpen')}
            >
              {isOpen} <TiDelete className={styles.deleteicon} />
            </p>
          )}
          {selectedSeniority && (
            <p
              className={styles.filterOption}
              onClick={() => clearFilter(setSelectedSeniority, 'seniority')}
            >
              {selectedSeniority} <TiDelete className={styles.deleteicon} />
            </p>
          )}
        </div>
      </div>
    </>
  )
}
