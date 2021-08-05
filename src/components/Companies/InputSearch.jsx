import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Filter from '../../containers/Filtros/FilteredArea'
import { getCompaniesSearch } from '../../store/companies/companies'
import styles from '../RecruiterForm/index.module.css'
import { TiDelete } from 'react-icons/ti'

export default function InputSearch() {
  const dispatch = useDispatch()
  const { areas } = useSelector((state) => state.aditionalData)

  const [values, setValues] = useState({
    search: '',
    area: '',
  })
  const [selectedArea, setSelectedArea] = useState('')

  const handleInputChange = async (e) => {
    const { value, name } = e.target
    //visualizaciones de filtros
    if (name === 'area') setSelectedArea(value)

    await setValues({ ...values, [name]: value })
    const inputValues = { ...values, [name]: value }
    await dispatch(getCompaniesSearch(inputValues))
  }

  const clearFilter = (stateChanged, name) => {
    stateChanged('')
    setValues({ ...values, [name]: '' })
    const inputValues = { ...values, [name]: '' }
    dispatch(getCompaniesSearch(inputValues))
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

          <Filter
            selectedValue={selectedArea}
            name='area'
            title='Area Favorita'
            values={areas}
            setValues={setValues}
            handleAreaChange={handleInputChange}
          />
        </div>
        <div className={styles.filterOptionContainer}>
          {selectedArea && (
            <p
              className={styles.filterOption}
              onClick={() => clearFilter(setSelectedArea, 'area')}
            >
              {selectedArea} <TiDelete className={styles.deleteicon} />
            </p>
          )}
        </div>
      </div>
    </>
  )
}
