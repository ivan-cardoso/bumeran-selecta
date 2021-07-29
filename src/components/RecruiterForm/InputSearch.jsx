import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { getAllRecruiters } from './recruiterTableData'
import styles from './index.module.css'

function InputSearch({ setRecruiters, recruiters }) {
  const handleChange = (e) => {
    const { value } = e.target
    // setSearchTerm(value)
  }

  return (
    <>
      <div className={styles.inputSearchContainer}>
        <form>
          <input
            style={{ height: 55, border: '1px solid grey' }}
            className={styles.inputSearch}
            type='text'
            placeholder='Buscar por nombre...'
          />
        </form>
      </div>
    </>
  )
}

export default InputSearch
